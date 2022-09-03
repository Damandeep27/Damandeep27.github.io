import React from 'react'
import { useEffect } from 'react'

const Experience = () => {
    useEffect(()=>{
        const items = document.querySelectorAll("#timeline li");
        const isInViewport = el => {
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        };
        const run = () =>
          items.forEach(item => {
            if (isInViewport(item)) {
              item.classList.add("show");
            }
          });
        // Events
        window.addEventListener("load", run);
        window.addEventListener("resize", run);
        window.addEventListener("scroll", run);
    },[])
  return (
    <div name='experience' className='w-full md:auto bg-black text-white'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
      <div className='pb-8  width-full flex sm:justify-center'>
        <p className='pt-6 text-4xl font-bold inline text-white '>
          Experience
        </p>
      </div>

{/* Container */}
<section id="timeline" className='p-0'>
    <ul className='p-0'>
         
    <li>
        <div class="card">
          <h3 className="font-bold text-2xl" class="company">Johnny & Jak's Restaurants Ltd (June 2022 - Present)</h3>
          <p class="position">Team Lead</p>
          <p class="info"><span class="checkmark">✔</span> Supervise 6+ crew members and provide appreciative and constructive feedback as required</p>
          <p class="info"><span class="checkmark">✔</span> Identify, prioritize and solve any safety related issues</p>
          <p class="info"><span class="checkmark">✔</span> Train new hires to follow the correct procedures</p>
          <p class="info"><span class="checkmark">✔</span> Support shift manager in managing shift by assigning specific duties to crew members, planning breaks etc</p>
        </div>
      </li>
      <li>
        <div class="card">
          <h3 className="font-bold text-2xl" class="company">Langara College(April 2021 - August 2022)</h3>
          <p class="position">Tech Tutor</p>
          <p class="info"><span class="checkmark">✔</span> Successfully helped 80+ students in navigating Brightspace (E-learning platform used by Langara)</p>
          <p class="info"><span class="checkmark">✔</span> Solved 100% problems related to the use of algebraic expressions in MS-Excel</p>
          <p class="info"><span class="checkmark">✔</span> Tutored 40+ students about formatting text in Microsoft Word to organize their assignments</p>
          <p class="info"><span class="checkmark">✔</span> Created 50+ Tech Nuggets to help students learning basics of Microsoft Office </p>
        </div>
      </li>
     
      <li>
        <div class="card">
          <h3 className="font-bold text-2xl" class="company">Johnny & Jak's Restaurants Ltd (October 2020 - June 2022)</h3>
          <p class="position">Crew Member</p>

          <p class="info"><span class="checkmark">✔</span> Cooked food in the kitchen ensuring McDonalds’ high quality food standards</p>
          <p class="info"><span class="checkmark">✔</span> Monitored inventory level and stocked up as necessary</p>
          <p class="info"><span class="checkmark">✔</span> Managed delivery orders with 100% accuracy by assembling and packaging them with keen attention to detail</p>
          <p class="info"><span class="checkmark">✔</span> Kept all areas neat and clean following the standard of sanitization and cleanliness given by FoodSafe</p>
        </div>
      </li>
      <li>
        <div class="card">
          <h3 className="font-bold text-2xl" class="company">Langara College (October 2020 – April 2021)</h3>
          <p class="position">Heath and Safety Representative</p>
          <p class="info"><span class="checkmark">✔</span> Ensured everyone follows the prevalent BC public health guidelines for the health and safety of employees and students</p>
          <p class="info"><span class="checkmark">✔</span> Gathered accurate contact information of visitors on check-in-stations while maintaining their privacy and respecting their individual circumstances</p>
          <p class="info"><span class="checkmark">✔</span> Informed and requested visitors to follow the college health guidelines</p>
        </div>
      </li>
    </ul>
  </section>
  </div>
  </div>
  )
}

export default Experience