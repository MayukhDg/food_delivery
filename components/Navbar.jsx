"use client";


import React, { useState, useEffect } from 'react';
import { navlinks } from '@/constants/constants';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  
  const [providers, setProviders] = useState(null);
  const { data:session } = useSession();


  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  
  return (
    <nav className='w-full flex justify-between items-center py-3 px-3 bg-[#562424] h-[5rem]' >
    <h3 className='text-white font-extrabold md:text-3xl text-2xl cursor-pointer hover:text-cyan-400' >FoodMania</h3>
    <ul className='md:flex items-center gap-3 hidden' >
      <>
      <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  Sign in
                </button>
              ))}
          </>
      </>
      { navlinks.map((link, index)=>(
        <li key={index} className='text-white font-extrabold text-3xl cursor-pointer' >
           { link } 
        </li>
      )) }       
        </ul> 
    </nav>
  )
}

export default Navbar