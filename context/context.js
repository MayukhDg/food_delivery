"use client";


import { useState, createContext } from "react";


export const Food_Data = createContext();

const Context = ({children})=>{
 const [cartItems, setCartItems] = useState([]);
 
 return (
    <Food_Data.Provider value={{cartItems, setCartItems}} >
        {children}
    </Food_Data.Provider>
 )
}

export default Context;