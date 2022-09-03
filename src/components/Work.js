import React from 'react'
import funtime from '../assets/funtime.png';
import metime from '../assets/meTime.png';
import todo from '../assets/todo.png';
import ecommerce from '../assets/ecommerce.png';
import barber from '../assets/barber.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-auto min-h-screen text-black bg-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-black border-pink-600'>
            Work
          </p>
          <p className='py-4'>Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ecommerce})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center'>
                An Ecommerce Shop
              </div>
              <div className='flex p-4 gap-3 flex-wrap'>
              <div class="w-auto bg-pink-400 text-white font-bold text-center shadow rounded px-1">
                  Commerce.js
              </div>
              <div class="w-auto bg-gray-400 text-white font-bold text-center shadow rounded px-1">
                  Stripe
              </div>
              <div class="w-auto bg-orange-400 text-white font-bold text-center shadow rounded px-1">
                  React
              </div>
              <div class="w-auto bg-blue-400 text-white font-bold text-center shadow rounded px-1">
                  Node.js
              </div>
              
              <div class="w-20 bg-green-400 text-white font-bold text-center shadow rounded">
                  Chakra UI
              </div>
              <div class="w-20 bg-yellow-400 text-white font-bold text-center shadow rounded">
                  Webpack
              </div>
              
              </div>
              <div className='pt-8 text-center'>
                <a href='https://youtu.be/g7NFwI9aZLw' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Damandeep27/CattyTech' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${metime})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center'>
                A Chat Application
              </div>
              <div className='flex p-4 gap-3 flex-wrap'>
              <div class="w-auto bg-pink-400 text-white font-bold text-center shadow rounded px-1">
                  Socket.io
              </div>
              <div class="w-auto bg-gray-400 text-white font-bold text-center shadow rounded px-1">
                  Styled components
              </div>
              <div class="w-auto bg-orange-400 text-white font-bold text-center shadow rounded px-1">
                  React
              </div>
              <div class="w-auto bg-blue-400 text-white font-bold text-center shadow rounded px-1">
                  Node.js
              </div>
              
              <div class="w-auto bg-green-400 text-white font-bold text-center shadow rounded px-1">
                  MongoDB
              </div>
              
              
              </div>
              <div className='pt-8 text-center'>
                <a href='https://youtu.be/3e_SRXsk78s' target='_blank' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Damandeep27/MeTime' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${funtime})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center'>
                A Simple Game
                </div>
              <div className='flex p-4 gap-3 flex-wrap'>
              <div class="w-auto bg-pink-400 text-white font-bold text-center shadow rounded px-1">
                  OAuth
              </div>
              <div class="w-auto bg-green-400 text-white font-bold text-center shadow rounded px-1">
                  Docker
              </div>
              <div class="w-auto bg-gray-400 text-white font-bold text-center shadow rounded px-1">
                  Socket.io
              </div>
              <div class="w-auto bg-orange-400 text-white font-bold text-center shadow rounded px-1">
                  Stripe
              </div>
              <div class="w-auto bg-blue-400 text-white font-bold text-center shadow rounded px-1">
                  React
              </div>
              
              <div class="w-auto bg-green-400 text-white font-bold text-center shadow rounded px-1">
                Twilio
              </div>
              <div class="w-auto bg-yellow-400 text-white font-bold text-center shadow rounded px-1">
                Mailjet
              </div>
              
              
              </div>
              <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=8T4koaq5zUw' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Damandeep27/FunTime' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <div className='text-2xl font-bold text-white  text-center'>
                A ToDo List
              </div>
              <div className='flex p-4 gap-3 flex-wrap'>
              <div class="w-20 bg-blue-400 text-white font-bold text-center shadow rounded">
                  Node.js
              </div>
              <div class="w-20 bg-pink-400 text-white font-bold text-center shadow rounded">
                  MongoDB
              </div>
              <div class="w-20 bg-green-400 text-white font-bold text-center shadow rounded">
                  Webpack
              </div>
              <div class="w-20 bg-red-400 text-white font-bold text-center shadow rounded">
                  Rest API
              </div>
              </div>
              

              <div className='pt-8 text-center'>
                <a href='https://youtu.be/qBnPCOowjQs' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Damandeep27/ToDoList' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${barber})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center'>
                A Barber Website
                </div>
              <div className='flex p-4 gap-3 flex-wrap'>
              <div class="w-auto bg-pink-400 text-white font-bold text-center shadow rounded px-1">
                  PHP
              </div>
              <div class="w-auto bg-gray-400 text-white font-bold text-center shadow rounded px-1">
                  MySQL
              </div>
              <div class="w-auto bg-yellow-400 text-white font-bold text-center shadow rounded px-1">
                  JavaScript
              </div>
              <div class="w-auto bg-blue-400 text-white font-bold text-center shadow rounded px-1">
                  HTML
              </div>
              
              <div class="w-auto bg-green-400 text-white font-bold text-center shadow rounded px-1">
                  CSS
              </div>
              
              
              
              </div>
              <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=2z8hCZg8sEo' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white'>
                    Demo
                  </button>
                </a>
               
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Work;