import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../component/About Us/AboutUs"
import CollegeAdmission from "../component/College Admission/CollegeAdmission"
import Contact from "../component/Contact/Contact"
import Dashboard from "../component/Dashboard/Dashboard"
import Error from "../component/error/Error"
import Home from "../component/Home/Home"
import Program from "../component/Program/Program"
import Resources from "../component/Resources/Resources"
import Testmonial from "../component/testmonial/Testmonial"
import Main from "../layout/Main"



 const router = createBrowserRouter  ([
    
    {
           path: '/',
           errorElement:<Error></Error> ,

       
           element: <Main></Main>,
         children: [
             {
            path:'/',
             element:<Home></Home>
        }
        ,
         {
           path: '/home',
           element:<Home></Home>
             },
             {
               path: '/Resources',
               element:<Resources></Resources>
             },
             {
               path: '/Program',
               element:<Program></Program>
               
             },
             {
               path: '/College Admission',
               element:<CollegeAdmission></CollegeAdmission>
             },
             {
               path: '/Contact',
               element:<Contact></Contact>
             },
             
             {
               path: '/AboutUs',
               element:<AboutUs></AboutUs>
                },
                {
                    path: '/dashboard',
                    element:<Dashboard></Dashboard>
           },
                
           {
            path: '/testmonial',
            element:<Testmonial></Testmonial>
             },
     
        ]
  }

])

export default router