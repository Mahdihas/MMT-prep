import React from 'react'
import Reams from '../../assest/Reams.png'
import Vector from '../../assest/Vector.png'


const Resources = () => {
  return (
    <>
       <div className='px-8 pb-10'>
          
          <div className=" flex-row-reverse lg:flex    py-4 w-[100%]">
    
          <div className="w-full lg:w-[50%]"><img className='w-full sm:h-[407px]' src={Reams} alt="" /></div>
    
    
            <div className="w-full justify-center md:justify-around   py-12 lg:py-0 sm:flex items-center lg:w-[50%]">
    
              <div className="">
                <div className="flex py-4 justify-center  items-center">
                <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
                <div className="px-4">
                  <h1 className='text-black font-semibold text-[20px]'>High School Pathways</h1>
                  <p className='text-[#868686]'>Insights on College Applications</p>
                 </div>
                </div>
                
                <div className="flex py-4  justify-center items-center">
                <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
                <div className="px-4">
                  <h1 className='text-black font-semibold text-[16px]'>College Admissions Report</h1>
                  <p className='text-[#868686]'>Insights on College Applications</p>
                 </div>
                </div>
                <div className="flex py-4  justify-center items-center">
                <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
                <div className="px-4">
                  <h1 className='text-black font-semibold text-[20px]'>Standardized Tests</h1>
                  <p className='text-[#868686]'>Insights on College Applications</p>
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
         <div className="py-24 bg-[#D9D9D9]">
    
      </div>
    
    </>
  )
}

export default Resources