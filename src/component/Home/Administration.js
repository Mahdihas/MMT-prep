import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import box2 from '../../assest/box2.png'

import box3 from '../../assest/box3.png'

import twenty1 from '../../assest/twenty1.png'



// import required modules
import { Autoplay } from "swiper";

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




// <>
// <Swiper
//   slidesPerView={1}
//       spaceBetween={10}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
 
      
      
//       breakpoints={{
    
        
 
//     500: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//         },

//         768: {
//           slidesPerView: 2,
//           spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },

  
//   }}
//   modules={[Autoplay]}
//   className="mySwiper"
//     >
//       <SwiperSlide>
//       <img className="w-[100%] h-[300px]" src={SAT} alt="" />
//         {/* <div className="flex justify-center items-center h-[218px] ">
//         <h1 className='text-2xl sm:text-5xl lg:text-[100px] text-black font-bold'>2022</h1>
//       </div> */}

//       </SwiperSlide>

//   <SwiperSlide><img className="w-[100%] h-[300px]" src={SATauto2} alt="" /></SwiperSlide>
 

//   <SwiperSlide>
//       <img className="w-[100%] h-[300px]" src={SAT} alt="" />
//         {/* <div className="flex justify-center items-center h-[218px] ">
//         <h1 className='text-2xl sm:text-5xl lg:text-[100px] text-black font-bold'>2022</h1>
//       </div> */}

//       </SwiperSlide>

//   <SwiperSlide><img className="w-[100%] h-[300px]" src={SATauto2} alt="" /></SwiperSlide>
 
// </Swiper>
//   </>