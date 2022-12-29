import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import SAT from '../../assest/SATauto1.png'
import Teacher from '../../assest/Teacher_Student_Relationship.png'
import SATauto2 from '../../assest/SATauto2.png'



const Administration = () => {
  return (
      <>
          <div className="bg-[#28323F] pl-4 py-12">
              <h1 className='text-4xl text-white font-bold py-4'>2022 Admission Results</h1>
              

               <div className="slide rounded-none">
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
        <div className="flex w-[100%] rounded-none">
         <div  className='rounded-none w-[55%] mr-[5%]'>
                <img className='w-full rounded-none h-[380px]' src={SAT} />


                          </div>
                          
                          <div className="w-[40%]">
                          <img className='w-[w-40%] h-[380px]' src={SATauto2} />   
                          </div>                  
         
          
        </div>
        <div className="flex w-[100%] rounded-none">
         <div  className='rounded-none w-[55%] mr-[5%]'>
                <img className='w-full rounded-none h-[380px]' src={SAT} />


                          </div>
                          
                          <div className="w-[40%]">
                          <img className='w-[w-40%] h-[380px]' src={SATauto2} />   
                          </div>                  
         
          
        </div>
      </Carousel>
    </div>

          </div>

          <div className="bg-[#28323F] pl-4 py-12">
              <h1 className='text-4xl text-white font-bold py-4'>Standardized Tests</h1>
              

               <div className="slide rounded-none">
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
        <div className="flex w-[100%] rounded-none">
         <div  className='rounded-none w-[55%] mr-[5%]'>
                <img className='w-full rounded-none h-[380px]' src={SAT} />


                          </div>
                          
                          <div className="w-[40%]">
                          <img className='w-[w-40%] h-[380px]' src={SATauto2} />   
                          </div>                  
         
          
        </div>
        <div className="flex w-[100%] rounded-none">
         <div  className='rounded-none w-[55%] mr-[5%]'>
                <img className='w-full rounded-none h-[380px]' src={SAT} />


                          </div>
                          
                          <div className="w-[40%]">
                          <img className='w-[w-40%] h-[380px]' src={SATauto2} />   
                          </div>                  
         
          
        </div>
      </Carousel>
    </div>

          </div>
      </>
  )
}

export default Administration