import React,{useEffect} from 'react';
import './Styling/App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from "./Login";
import {useStateValue} from "./State"
import { auth } from './firebase';


function App() {

  const[{user},dispatch]=useStateValue();

  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({type:'SET_USER',user:authUser})
      }
      else{
        dispatch({type:'SET_USER',user:null})
      }
    })
   
  },[])


  return (
    <Router>
      <Switch>
         <Route path="/checkout">
         <Header/>
         <Checkout/>
             </Route>
             <Route path="/login">
             <Login/>
             </Route>
             <Route path="/">
             <Header/>
             <Home/>
             </Route>

      </Switch>


    </Router>
    
  );
}

export default App;
