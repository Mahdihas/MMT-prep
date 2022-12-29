import React from 'react'
import Reams from '../../assest/Reams.png'
import Vector from '../../assest/Vector.png'

const Program = () => {
  return (
    <>
      
      <div className='px-8 pb-10'>
          
          <div className=" flex-row-reverse lg:flex    py-4 w-[100%]">
    
          <div className="w-full lg:w-[50%]"><img className='w-full sm:h-[407px]' src={Reams} alt="" /></div>
    
    
            <div className="w-full justify-center md:justify-around   py-12 lg:py-0 sm:flex items-center lg:w-[50%]">
    
              <div className="">
                <div className="flex mr-[70px] sm:mr-10 py-4 justify-center  items-center">
                <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
                <div className="px-4">
                  <h1 className='text-black font-semibold text-[20px]'>Elementary School</h1>
                  <p className='text-[#868686] '>Solidifying the Basics</p>
                 </div>
                </div>
                
                <div className="flex mr-[20px] sm:mr-[0] py-4  justify-center items-center">
                <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
                <div className="px-4">
                  <h1 className='text-black font-semibold text-[16px]'>Middle School</h1>
                  <p className='text-[#868686]'>Prepare for the advancements</p>
                 </div>
                </div>
                <div className="flex sm:mr-[-20px] py-4  justify-center items-center">
                <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
                <div className="px-4 ">
                  <h1 className='text-black font-semibold  text-[20px]'>High School</h1>
                  <p className='text-[#868686]'>Embark On the Research Projects <br />  & College  Profile Selection</p>
                 </div>
               </div>
    
              </div>
              <div className="">
    
              <div className="flex py-4  justify-center items-center">
                <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
                <div className="px-4">
                  <h1 className='text-black font-semibold text-[20px]'>After School Programs / <br /> Voluntary Activities</h1>
                  <p className='text-[#868686]'>Insights on College Applications</p>
                 </div>
                </div>
                <div className="flex py-4  justify-center items-center">
                <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
                <div className="px-4">
                    <h1 className='text-black font-semibold text-[20px]'>Occupation Guides / <br />
                      Research</h1>
                  <p className='text-[#868686]'>Insights on College Applications</p>
                 </div>
               </div>
              </div>
            </div>
           
            
    
    
              </div>
         
    
        </div>
         <div className="py-12 bg-[#D9D9D9]">
    
      </div>
    </>
    
  )
}

export default Program