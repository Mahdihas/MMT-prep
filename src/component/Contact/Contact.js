import React from 'react'

import map from '../../assest/map.png'
import obook from '../../assest/Books.png'
import oicon from '../../assest/oicon.png'
import oman from '../../assest/oman.png'
import obox from '../../assest/obox.png'



const Contact = () => {
  return (
    <>
    <div className='px-4 py-8'>
                <h1 className='text-5xl md:text-[100px] mb-10 text-black font-bold'>OFFERS</h1>

    </div>
      <div className="grid  bg-[#DEDFE1] grid-cols-1   sm:grid-cols-3 gap-4">
          
      <div className="flex justify-center   items-center py-5"><div className="bg-[white] rounded-2xl p-5 px-10 h-[280px] mx-auto "><div className="flex justify-center"><img src={oman} alt="" /></div><p className='pt-10 text-center font-bold text-1xl  text-black'>FREE CONSULTATION</p></div></div>
      <div className="flex justify-center bg-[#C2C4C7] items-center py-5"><div className="bg-[white] rounded-2xl   px-8 p-5 h-[280px] mx-auto "><div className="flex justify-center"><img src={obook} alt="" /></div><p className='pt-10 text-center font-bold text-1xl text-black'>FREE COMPLEMENTARY  <br />
SAT/ACT test</p></div></div>

      <div className="flex justify-center items-center py-5"><div className="bg-[white] rounded-2xl  h-[280px] p-5  px-8 mx-auto "><div className="flex justify-center"><img src={oicon} alt="" /></div><p className='pt-10 text-center font-bold text-1xl text-black'>Get $100 off a tutoring <br />
program at MMT Prep</p></div></div>


   
      
      
      </div>


      <div className="px-4 py-[150px]">
      <h1 className='text-5xl md:text-[100px] capitalize mb-10 text-black font-bold'>We are Here</h1>

        <div className=" sm:flex  ">
          
          <div className="px-4">
              <img src={map} alt="" />
          </div>
          <div className="grid pt-12 justify-center sm:pt-0 mx-auto grid-row-3 gap-4">
            
            <img src={obox} alt="" />

            
          
            <div className="flex items-center">
            <img src={obox} alt="" />

</div>
           
          
            <div className="flex items-end">
            <img src={obox} alt="" />

</div>
         



           </div>
         

            </div>


      </div>


      <div className="px-4">

        <div className="">
          <p className='px-2 pb-2 text-2xl font-bold text-[#6893F1]'>
          CONTACT US
          </p>
         
          <h1 className='text-5xl md:text-[80px] mb-10 text-black font-bold'>Need to ask us a question?</h1>
          <p className='text-2xl text-[gray]'>Fill out the form below and we’ll do some research on our end and get back to you within 24-48 <br /> hours.</p>
             
        </div>
        <form className="">
        <div className=" grid grid-cols-1 py-8  sm:grid-cols-3 gap-0  lg:w-[80%] xl:w-[56%] mx-auto">
       
         
       <div className="flex justify-center"><input type="text" placeholder="First Name (parents/ Guardian)" className="input border-[2px] border-black rounded-none w-full max-w-xs" /></div>
       <div className="flex justify-center">
       <input type="text" placeholder="Last Name (parents/ Guardian)" className="input border-[2px] border-black rounded-none w-full max-w-xs" />
       </div>      
       <div className="flex justify-center">
       <input type="text" placeholder="Preferred Consulting Date" className="input border-[2px] border-black rounded-none w-full max-w-xs" />
       </div>
    
     
       <div className="flex justify-center">
       <input type="text" placeholder="Email" className="input border-[2px] border-t-0 border-black rounded-none w-full max-w-xs" />
       </div>
       <div className="flex justify-center">
       <input type="text" placeholder="Phone" className="input border-[2px] border-t-0 border-black rounded-none w-full max-w-xs" />
</div>
       <div className="flex justify-center">
       <input type="text" placeholder="2-3 pm" className="input border-[2px] border-t-0 border-black rounded-none w-full max-w-xs" />
</div>     
       
       
          </div>
          <div className="sm:grid pb-12 2xl:px-4  grid-cols-1 sm:grid-cols-2 lg:w-[80%] xl:w-[56%] mx-auto">
            <div className="">
              <div className="flex justify-center">
              <textarea className="w-[320px] sm:w-full  h-[200px] textarea border-[1px] border-black" placeholder="Bio"></textarea>

</div>
            </div>



            <div className="">
              <div className="flex pt-6 sm:pt-0  justify-center">
                <div className="grid grid-rows-5 py-2 gap-3">
                  <div className="flex "> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                    <p className='text-[12px] text-[black] font-normal'>General Consulting</p>
</div> 
<div className=" flex "> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                    <p className='text-[12px] text-[black] font-normal'>Career Consulting</p>
</div> 
<div className="flex "> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                    <p className='text-[12px] text-[black] font-normal'>College / SAT / ATC <br /> Consulting</p>
</div> 
<div className="flex j"> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                    <p className='text-[12px] text-[black] font-normal'>Complementary  SAT / ATC</p>
</div> 
<div className="flex "> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                    <p className='text-[12px] text-[black] font-normal'>Internship / Volunteer </p>
</div> 


</div>
</div>
            </div>
            


          </div>

        </form>
      </div>
      
      </>
  )
}

export default Contact