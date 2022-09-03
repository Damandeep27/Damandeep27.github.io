import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>

                <div>

                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'  >
                        <p>&#x1F44B; I'm Daman, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className='moveFromBottom'>
                        <p>
                            I'm a recent graduate with diploma in computer studies from Langara College. My passion about software development began from high school when I first learned how to add an image in HTML page. So, I decided to give wings to my dream of becoming a developer. 
                            I am always open to learn new technologies as I believe learning never ends. I still remember the day when I was admitted to Langara college with no programming background, but due to my curiosity to learn programming I grasped everything so quickly.
                            Today I feel confident enough to work for a small-businesses all the way to large enterprise corporations to provide them with the best service.

                        </p>
                    </div>
                </div>

                
            </div>
            
        </div>
    
  )
}

export default About