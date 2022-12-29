import React from 'react'
import Reams from '../../assest/Reams.png'
import Vector from '../../assest/Vector.png'

const CollegeAdmission = () => {
  return (
    <>
    <div className='px-8 pb-10'>
       
       <div className=" flex-row-reverse lg:flex    py-4 w-[100%]">
 
       <div className="w-full lg:w-[50%]"><img className='w-full sm:h-[407px]' src={Reams} alt="" /></div>

 
 
         <div className="w-full justify-center md:justify-around   py-12 lg:py-0 sm:flex items-center lg:w-[40%]">
 
           <div className="">
             <div className="flex ml-[5px] py-4 justify-center  items-center">
             <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
             <div className="px-4">
               <h1 className='text-black font-semibold text-[20px]'>Grades 12</h1>
               <p className='text-[#868686]'>Application Counseling And Essay Review</p>
              </div>
             </div>
             
             <div className="flex py-4  justify-center items-center">
             <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
             <div className="px-4">
               <h1 className='text-black font-semibold text-[20px]'>BS/MD Candidates</h1>
               <p className='text-[#868686]'>counseling    <span className='px-2'></span> for <span className='px-2'></span>  BS/MD <span className='px-2'></span>  application</p>
              </div>
            </div>
             <div className="flex py-4  justify-center items-center">
             <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
             <div className="px-4">
               <h1 className='text-black font-semibold text-[20px]'>BS/DMD Candidates</h1>
               <p className='text-[#868686]'>counseling for Dental School application</p>
              </div>
              </div>
              


              <div className="flex py-4  justify-center items-center">
             <img className='bg-[#E7DFC3] py-5 text-black rounded-full px-5' src={Vector} alt="" />
             <div className="px-4">
               <h1 className='text-black font-semibold text-[20px]'>Transfer Students</h1>
               <p className='text-[#868686]'>Application Counseling And Final Review</p>
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

export default CollegeAdmission