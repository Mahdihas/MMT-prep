
import React, {  useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUniversity } from "react-icons/fa";








const Header = () => {

 
    // Resources        Program            College Admission       Contact      About Us


  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
  const menu = 
    <>
  <li>
              <NavLink
                to='/Resources'
                aria-label='Resources  '
                title='Resources'
                className={({ isActive }) =>

                  isActive
                    ? 'font-normal  tracking-wide capitalize  text-[#191a1a] border-b-[1px] border-[#191a1a]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-normal  tracking-wide capitalize text-[#595A62] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
               Resources  
              </NavLink>
          </li>
          <li>
              <NavLink
                to='/Program'
                aria-label='Program'
                title='Program'
                className={({ isActive }) =>

                  isActive
                    ? 'font-normal  tracking-wide capitalize text-[#191a1a] border-b-[1px] border-[#191a1a] transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-normal  tracking-wide capitalize text-[#595A62] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
               Program  
              </NavLink>
      </li>
      

      <li>
              <NavLink
                to='/testmonial'
                aria-label='testmonial'
                title='testmonial'
                className={({ isActive }) =>

                  isActive
                    ? 'font-normal  tracking-wide capitalize text-[#191a1a] border-b-[1px] border-[#191a1a] transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-normal  tracking-wide capitalize text-[#595A62] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
               Testmonial  
              </NavLink>
          </li>
          <li>
              <NavLink
                to='/College Admission'
                aria-label='College Admission '
                title='  College Admission  '
                className={({ isActive }) =>

                  isActive
                    ? 'font-normal  tracking-wide capitalize text-[#191a1a] border-b-[1px] border-[#191a1a] transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-normal  tracking-wide capitalize text-[#595A62] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                 College Admission    
              </NavLink>
          </li>
          
          <li>
              <NavLink
                to='/Contact'
                aria-label='Contact'
                title='  Contact'
                className={({ isActive }) =>

                  isActive
                    ? 'font-normal  tracking-wide capitalize text-[#191a1a] border-b-[1px] border-[#191a1a] transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-normal  tracking-wide capitalize text-[#595A62] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                 Contact  
              </NavLink>
          </li>
          <li>
              <NavLink
                to='/AboutUs'
                aria-label='About Us'
                title=' About Us'
                className={({ isActive }) =>

                  isActive
                    ? 'font-normal  tracking-wide capitalize text-[#191a1a] border-b-[1px] border-[#191a1a]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-normal  tracking-wide capitalize text-[#595A62] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                About Us  
              </NavLink>
          </li>
          
          <li>
              <NavLink
                to='/Dashboard'
                aria-label='Dashboard'
                title='Dashboard'
                className={({ isActive }) =>

                  isActive
                    ? 'font-bold  tracking-wide capitalize text-[#191a1a] border-b-[1px] border-[#191a1a] transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-bold  tracking-wide capitalize text-[#595A62] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
               Dashboard  
              </NavLink>
      </li>
          



      

        


    </>
    
  






   







  return (
    <>
      

    <div className='nav  shadow-sm'>
      <div className='  py-6  pr-4'>
        <div className='relative  flex items-center justify-between '>
        <Link
            to='/'
            aria-label='proReader'
            title='proReader'
            className='inline-flex items-center'
          >
           
           <span className='ml-2 flex items-center  px-2 lg:px-6 text-2xl text-[gray]  font-normal tracking-wide #302e2c text-shadow-lg'>
           <FaUniversity className='text-[#313232]  inline-block'></FaUniversity><span className='text-[#313232] pl-2 pr-1 font-extrabold'>MMT</span>Prep 

            </span>
          </Link>
       
            <ul className='  items-center hidden space-x-8 xl:px-24 lg:flex '>
              
           
            
            {menu}
            </ul>
            
            <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-[gray]' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute mx-auto bg-white  top-0 left-0 w-full z-40'>
                <div className='p-5 bg-[white] mx-auto border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                    <Link
            to='/'
            aria-label='proReader'
            title='proReader'
            className='inline-flex items-center'
          >
           
           <span className='ml-2 flex items-center  px-2 lg:px-6 text-2xl text-[gray]  font-normal tracking-wide #302e2c text-shadow-lg'>
           <FaUniversity className='text-[#313232]  inline-block'></FaUniversity><span className='text-[#313232] pl-2 pr-1 font-extrabold'>MMT</span>Prep 

            </span>
          </Link>
      
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mb-[-100px] -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-[gray]' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className='pl-4'>
                  <ul className='spacey-4'>
           
                      

                      
        {menu}

       
            
          
          </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
           
           
   
         
        </div>
      </div>
      </div>
      </>
  )
}

export default Header