import React from 'react'
import { useState,useEffect } from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import hello from '../assets/hi.gif';
import { Link } from 'react-scroll';


export const Home = () => {
  const values=["I'm a Full Stack Developer","I'm a Front-End Developer"," I'm a Backend Developer","I'm a Web Developer", "I'm a Creative Developer"];
  const[value,setValue]=useState(values[0]);
  useEffect(()=>{
    let item=0;

    const changeValue=()=>{
      if(item==4){
        item=0;
        setValue(values[item])
      }else{
        item=item+1;
        setValue(values[item])
      }
    }
    setInterval(changeValue,8000);
    return 
  },[])
  return (
    <div name='home' className='w-full h-screen  bg-gradient-to-r from-yellow-400 to-orange-600' >
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='font-bold text-pink-600 '>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Daman</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-red typeWriter'>{value}</h2>
            
            <p className=' text-black py-4 max-w-[700px]'>I'm a full-stack developer specializing in building (and occassionally designing) exceptional digital experience.
            Currently, I'm focused on building responsive full-stack web applications.</p>
            <div>
            
            
           
            <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          
                View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/>
                </span>
              
            </button>
            </Link>
           
           
        </div>
        </div>
        <img src={hello} className='hidden lg:block absolute lg:top-24 lg:right-20 object-scale-down h-25 w-80' alt="hello" />
    </div>
    
  )
}
