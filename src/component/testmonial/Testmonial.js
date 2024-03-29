import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import box2 from '../../assest/box2.png'
import test20 from '../../assest/test2000.png'
import test19 from '../../assest/test19.png'
import test18 from '../../assest/test2018.png'
import test17 from '../../assest/test2017.png'



import box3 from '../../assest/box3.png'

import twenty1 from '../../assest/twenty1.png'

import circle from '../../assest/circle.png'
import Star from '../../assest/Star.png'
import { BsArrowDownCircle,BsArrowDown } from "react-icons/bs";





// import required modules
import { Autoplay } from "swiper";

const Testmonial = () => {

  const [show, setShow] = useState(false);


  return (
    <>
     <div className='px-4 py-10'>

<div className="">
  <h1 className='text-5xl sm:text-[100px] mb-10 text-black font-bold'>Records</h1>

  <>
<Swiper
  slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
 
      
      
      breakpoints={{
    
        
 
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
  
  }}
  modules={[Autoplay]}
  className="mySwiper"
    >
      <SwiperSlide>
      <img className="w-full" src={box3} alt="" />
        {/* <div className="flex justify-center items-center h-[218px] ">
        <h1 className='text-2xl sm:text-5xl lg:text-[100px] text-black font-bold'>2022</h1>
      </div> */}

      </SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

</Swiper>
  </>
  
  <>
    <div className="my-4 bg-[#EEEEEE]">
    <Swiper
  slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
 
      
      
      breakpoints={{
    
        
 
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
  
  }}
  modules={[Autoplay]}
  className="mySwiper"
    >
      <SwiperSlide className="h-full bg-[gray]">
          
          <img className="w-full bg-white h-full" src={twenty1} alt="" />
      

      </SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

        <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>


</Swiper>
</div>
          </>
          




          <>
            {show ?
              <>
              <div className="my-4 ">
              <Swiper
            slidesPerView={2}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
           
                
                
                breakpoints={{
              
                  
           
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
            
            }}
            modules={[Autoplay]}
            className="mySwiper"
              >
                <SwiperSlide className="h-full ">
                    
                    <img className="w-full bg-white h-full" src={test20} alt="" />
                
          
                </SwiperSlide>
          
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
                  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
                  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
          
          </Swiper>
                </div>
                


                <div className="my-4 bg-[#EEEEEE]">
    <Swiper
  slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
 
      
      
      breakpoints={{
    
        
 
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
  
  }}
  modules={[Autoplay]}
  className="mySwiper"
    >
      <SwiperSlide className="h-full bg-[gray]">
          
          <img className="w-full bg-white h-full" src={test19} alt="" />
      

      </SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

        <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>


</Swiper>
                </div>
                


                <div className="my-4 ">
              <Swiper
            slidesPerView={2}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
           
                
                
                breakpoints={{
              
                  
           
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
            
            }}
            modules={[Autoplay]}
            className="mySwiper"
              >
                <SwiperSlide className="h-full ">
                    
                    <img className="w-full bg-white h-full" src={test18} alt="" />
                
          
                </SwiperSlide>
          
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
                  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
                  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
            <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
          
          
          </Swiper>
                </div>



                <div className="my-4 bg-[#EEEEEE]">
    <Swiper
  slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
 
      
      
      breakpoints={{
    
        
 
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
  
  }}
  modules={[Autoplay]}
  className="mySwiper"
    >
      <SwiperSlide className="h-full bg-[gray]">
          
          <img className="w-full bg-white h-full" src={test17} alt="" />
      

      </SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

        <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>
  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>

  <SwiperSlide><img className="w-full" src={box2} alt="" /></SwiperSlide>


</Swiper>
                </div>
              
            </>
            


              
              : null
            }
            <div className="flex justify-center">
            <BsArrowDownCircle className="text-[50px]" onClick={()=>setShow(!show)}></BsArrowDownCircle>

            </div>
</>
</div>


<div className="pt-24 pb-12 ">

  <h1 className="text-center text-[50px]  sm:text-[70px] font-semibold">Why Our Customer <span className="text-center text-[50px] text-black font-bold">Love</span> us?</h1>
  <div className="grid pt-10 grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex justify-center items-center"><div className="border-[1px] pt-10 pb-20 shadow-md rounded-2xl px-4 border-[gray]">
      <div className="flex justify-center">
      <img src={circle} alt="" /> 

     </div>
      <h1 className="text-black py-2 text-center text-2xl font-bold">Jessica Smith</h1>
      <div className="flex py-3 justify-center">
        <img src={Star} alt="" />
        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

      </div>
      <p className=" text-[gray] ">Fill out the form below and we’ll do <br className="block md:hidden lg:block" /> some research on our end and get back <br className="block md:hidden lg:block" /> to you within 24-48 hours.</p>
    </div></div>
    <div className="flex justify-center items-center"><div className="border-[1px] pt-10 pb-20 shadow-md rounded-2xl px-4 border-[gray]">
      <div className="flex justify-center">
      <img src={circle} alt="" /> 

     </div>
      <h1 className="text-black py-2 text-center text-2xl font-bold">Jessica Smith</h1>
      <div className="flex py-3 justify-center">
        <img src={Star} alt="" />
        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

      </div>
      <p className=" text-[gray] ">Fill out the form below and we’ll do <br className="block md:hidden lg:block" /> some research on our end and get back <br className="block md:hidden lg:block" /> to you within 24-48 hours.</p>
    </div></div>

    <div className="flex justify-center items-center"><div className="border-[1px] pt-10 pb-20 shadow-md rounded-2xl px-4 border-[gray]">
      <div className="flex justify-center">
      <img src={circle} alt="" /> 

     </div>
      <h1 className="text-black py-2 text-center text-2xl font-bold">Jessica Smith</h1>
      <div className="flex py-3 justify-center">
        <img src={Star} alt="" />
        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

      </div>
      <p className=" text-[gray] ">Fill out the form below and we’ll do <br className="block md:hidden lg:block" /> some research on our end and get back <br className="block md:hidden lg:block" /> to you within 24-48 hours.</p>
    </div></div>


  </div>

  <div className="grid py-12 grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex justify-center items-center"><div className="border-[1px] pt-10 pb-20 shadow-md rounded-2xl px-4 border-[gray]">
      <div className="flex justify-center">
      <img src={circle} alt="" /> 

     </div>
      <h1 className="text-black py-2 text-center text-2xl font-bold">Jessica Smith</h1>
      <div className="flex py-3 justify-center">
        <img src={Star} alt="" />
        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

      </div>
      <p className=" text-[gray] ">Fill out the form below and we’ll do <br className="block md:hidden lg:block" /> some research on our end and get back <br className="block md:hidden lg:block" /> to you within 24-48 hours.</p>
    </div></div>
    <div className="flex justify-center items-center"><div className="border-[1px] pt-10 pb-20 shadow-md rounded-2xl px-4 border-[gray]">
      <div className="flex justify-center">
      <img src={circle} alt="" /> 

     </div>
      <h1 className="text-black py-2 text-center text-2xl font-bold">Jessica Smith</h1>
      <div className="flex py-3 justify-center">
        <img src={Star} alt="" />
        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

      </div>
      <p className=" text-[gray] ">Fill out the form below and we’ll do <br className="block md:hidden lg:block" /> some research on our end and get back <br className="block md:hidden lg:block" /> to you within 24-48 hours.</p>
    </div></div>

    <div className="flex justify-center items-center"><div className="border-[1px] pt-10 pb-20 shadow-md rounded-2xl px-4 border-[gray]">
      <div className="flex justify-center">
      <img src={circle} alt="" /> 

     </div>
      <h1 className="text-black py-2 text-center text-2xl font-bold">Jessica Smith</h1>
      <div className="flex py-3 justify-center">
        <img src={Star} alt="" />
        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

        <img src={Star} alt="" />

      </div>
      <p className=" text-[gray] ">Fill out the form below and we’ll do <br className="block md:hidden lg:block" /> some research on our end and get back <br className="block md:hidden lg:block" /> to you within 24-48 hours.</p>
    </div></div>


  </div>
</div>


      </div>
      <div className="py-20 px-4 bg-[#2A3543]">


      </div>
    </>
  )
}

export default Testmonial