import React from 'react'
import hero from '../../assest/hero.png'
import rectangle from '../../assest/Rectangle 167.png'
import main from '../../assest/main_1 1.png'
import SAT from '../../assest/SAT-Score-Report.png'
import Teacher from '../../assest/Teacher_Student_Relationship.png'
import Administration from './Administration'
import Table from './Table'



const Home = () => {
  return (
    <>
    <div className="pt-4 pb-12">
        <div className="pt-4 pb-12 relative sm:flex  items-center">
        
         
          <div className='sm:w-[30%] px-4 sm:px-0 pb-8      sm:pb-0  sm:ml-[4%]'>
        <h1 className="text-2xl   md:text-4xl lg:text-5xl   xl:absolute z-[100] xl:top-20  2xl:static  text-black font-bold">Extraordinary <br />
Futures Begin with <br className='block  sm:hidden   lg:block' />
MMT Prep</h1>
        <p className="my-4 lg:pt-10 xl:pt-0">Your child can do anything with the right  <br className='block sm:hidden lg:block' />
support. You’ll love watching your child</p>
<button className='btn mt-5 xl:mt-0   rounded-full outline-none   hover:text-white hover:bg-[#28323F]  bg-[#28323F] text-white px-20 sm:px-10 lg:px-[70px] font-bold capitalize   '>Get STATED</button>
          </div>
          <div className="sm:w-[66%] z-[0] ">    <img src={hero} className="lg:h-[600px] w-full" />
          </div>
         
          
    
  </div>
      </div>
      
      <div className="px-8 py-12">
        <div className="flex">
          <img className='h-[110px]' src={rectangle} alt="" />
          <div className="mx-4 sm:mx-6">
          <p className='text-[20px] sm:text-[30px] mt-[-6px] sm:mt-[-10px]   font-semibold'>How are we</p>
          <h1 className='text-4xl  pt-[30px]  lg:text-[60px] font-bold'>UNIQUE?</h1>
          </div>

        </div>


        <div className=" sm:flex my-4  items-center">
          <div className="w-full sm:w-[50%] py-[50px] sm:py-0">
            <h1 className='text-[30px] sm:text-[40px] text-black font-bold'>Customized Platform</h1>
            <p className='text-[20px] text-[gray]'>Flexible platforms that enable your  <br className='block sm:hidden lg:block' /> child to learn anytime, anywhere.

            </p>

          </div>
          <div className="w-full sm:w-[50%]">
            <img className='w-full  h-[285px]' src={main} alt="" />

          </div>

        </div>

        <div className=" sm:flex my-4 items-center">
          <div className="w-full sm:w-[50%] py-[50px] sm:py-0">
            <h1 className='text-[30px] sm:text-[40px] text-black  font-bold'>Qualified Instruction</h1>
            <p className='text-[20px] text-[gray]'>

All instructors hold Bachelors & Masters <br className='block sm:hidden lg:block' /> degrees in various specialties and <br className='block sm:hidden lg:block' /> fields. 

            </p>

          </div>
          <div className="w-full sm:w-[50%] ">
            <img className='w-full  h-[285px]' src={Teacher} alt="" />

          </div>

        </div>
        <div className=" sm:flex my-4 items-center">
          <div className="w-full sm:w-[50%] py-[50px] sm:py-0">
            <h1 className='text-[30px] sm:text-[40px] font-bold text-black'>Delivered Results</h1>
            <p className='text-[20px] text-[gray]'>

Consistent, proven, drastic improvement<br className='block sm:hidden lg:block' /> in standardized test scores and college <br className='block sm:hidden lg:block' /> admission.

            </p>

          </div>
          <div className="w-full sm:w-[50%]">
            <img className='w-full  h-[285px]' src={SAT} alt="" />

          </div>

        </div>

      </div>
      <Administration></Administration>
      <Table></Table>
    </>
  )
}

export default Home