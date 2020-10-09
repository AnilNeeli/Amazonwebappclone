import React,{useState} from 'react'
import "./Styling/login.css"
import {Link,useHistory} from "react-router-dom"
import { auth } from './firebase';

function Login() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
 const history=useHistory();

  const cemail=(e)=>{
      setemail(e.target.value)
  }
  const cpassword=(e)=>{
    setpassword(e.target.value)
}
    const sigin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
                 history.push('/')
        })
        .catch((e)=>alert(e.message))


    }

    const signup=(e)=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/")
   })
   .catch((e)=>alert(e.message))
        

    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="logo"></img>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input onChange={cemail} type="email" value={email}></input>
                    <h5>Password </h5>
                    <input onChange={cpassword} type="password" value={password}></input>
                    <button onClick={sigin} type="submit" className="login__signin">Sign In</button>
                </form>
                <p>
                    By Signing-in you agree to Amazon's condition of Use& sale ,Please see  our Privacy Notice 
                </p>
                <button onClick={signup} className="login__signup">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
