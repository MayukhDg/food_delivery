"use client";

import pancakes from "../assets/pancakes.jpg";
import burger from "../assets/burger.jpg";
import Image from "next/image";
import { useContext } from "react";
import { Food_Data } from "@/context/context";
import fruit from "../assets/fruit.jpg"

const Feed = () => {
  
  const { cartItems, setCartItems } = useContext(Food_Data);
 
  
  const handlePancake = ()=>{
   
   
    const itemExists = cartItems.find((item)=>(
    item.name==="pancake"

   ))
     

   if(!itemExists){
    setCartItems((prev)=>{
     return [...prev, {name:"pancake", price:"Rs 700", value:1}]
    })
   } else{
    cartItems.map((item)=>(
    item.name==="pancake" && item.value++
    ))
   }

   

   

  } 
  
  
  const handleBurger = ()=>{
    const itemExists = cartItems.find((item)=>(
      item.name==="burger"
  
     ))
       
  
     if(!itemExists){
      setCartItems((prev)=>{
       return [...prev, {name:"burger", price:"Rs 600", value:1}]
      })
     } else{
      cartItems.map((item)=>(
      item.name==="burger" && item.value++
      ))
     }
  } 
  
  
  return (
    <section className="flex flex-col overflow-scroll feed pb-4 " >
      <section className='hero flex pt-4 relative md:flex-row flex-col ' >
    <div className='pl-4 flex flex-col' >  
    <h2 className='text-white text-3xl font-extrabold leading-[60px]'  >Welcome to FoodMania  <br/> Your one-stop shop for the tastiest dishes <br/> <span className="uppercase" > Order Now </span></h2>
  
    <Image src={burger} alt="burger"  className="rounded-2xl mt-4" width={400} height={200} />
    
    <div className=" bg-slate-700 w-[50%] mt-3 pl-2  rounded-2xl font-semibold md:self-auto self-center" >
     <p>Burger & Fries</p>
     <p>Price: Rs 700</p>
     <button onClick={handleBurger} >Add to Cart</button>
    </div>
    </div>
    <div className='flex flex-1 items-end md:pt-0 pt-3 pr-2 flex-col pl-2 '  >
    <Image  className="rounded-2xl" src={pancakes} alt="pancakes" width={700} height={200} />
    <div className=" bg-slate-700 w-[50%] mt-3 pl-2 rounded-2xl font-semibold self-center" >
     <p>Pancakes</p>
     <p>Price: Rs 700</p>
     <button onClick={handlePancake} >Add to Cart</button>
    </div>
    </div>
    </section>
    <div className="w-full flex pt-5 flex-col items-center" >  
     <Image src={fruit} alt="fruit" className="rounded-xl" height={80} width={500} />
     <div className=" bg-slate-700 w-[30%] mt-3 pl-2 rounded-2xl font-semibold self-center" >
     <p>Fruit Platter</p>
     <p>Price: Rs 500</p>
     <button onClick={()=>{}} >Add to Cart</button>
    </div>
    </div>
    </section>
  )
}

export default Feed