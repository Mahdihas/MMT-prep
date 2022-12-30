import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";

import firstimg from '../../assest/firstimg.png'


const Blog = () => {
  return (
      <div className='px-4 bg-[#0D1218] py-10'>
          <div className=" sm:flex justify-between">
              

              <div className="">
              <h1 className='text-white font-bold text-2xl'>Blog / news</h1>
              <p className='text-white font-semibold pb-4 pt-2 text-1xl'>Subscribe To MMT Newsletter, Attached with admissions secrets. </p>
              
              </div>
              <div className="text-white sm:pb-0 pb-10">
                  <p className='h1 border-b-[1px] px-12'>SAT / ACT</p>
                  <p className='h1 border-b-[1px] px-12'>News</p>
                  <p className='h1 border-b-[1px] px-12'>Tutoring</p>
                  <p className='h1 border-b-[1px] px-12'>Admissions</p>
                  <p className='h1 border-b-[1px] px-12'>Tutoring</p>
                  <p className='h1 border-b-[1px] px-12'>All</p>
              </div>

              

          </div>
          <div className="sm:flex pb-12">
          <div className="sm:w-[65%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
            <input type="text" placeholder="First Name" className="input bg-[#1E2833] text-white border-[1px] border-white rounded-full" />
            <input type="text" placeholder="Last Name" className="input bg-[#1E2833] text-white border-[1px] border-white rounded-full" />

            <input type="text" placeholder="Email" className="input mt-5 md:mt-0 bg-[#1E2833] text-white border-[1px] border-white rounded-full" />
            <button className='btn mt-5 xl:mt-0  rounded-full outline-none  hover:text-white hover:bg-[gray]  bg-white text-black capitalize   font-bold'>Subscribe</button>


          </div>
         
          </div>
      <div className="">
      <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
       
            <SwiperSlide><img className="w-full" src={firstimg} alt="" /> <p className="text-white text-1xl pt-2">This is the news title.....</p> </SwiperSlide>
      
            <SwiperSlide><img className="w-full" src={firstimg} alt="" /> <p className="text-white text-1xl pt-2">This is the news title.....</p> </SwiperSlide>

            <SwiperSlide><img className="w-full" src={firstimg} alt="" /> <p className="text-white text-1xl pt-2">This is the news title.....</p> </SwiperSlide>

      </Swiper>
    </>
              

          </div>
          
  
    </div>
  )
}

export default Blog