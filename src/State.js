import React,{createContext,useContext,useReducer} from "react"
//This is the data layer
export const StateContext=createContext();
//Build a provider
export const StateProvider=({reducer,intialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
    </StateContext.Provider>
)

//This is how we use it inside a component
export  const useStateValue=()=>useContext(StateContext)