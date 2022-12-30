import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { ClockLoader } from 'react-spinners';


function App() {


    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        },1000)
        
    },[])


  
  return (
   <> {
      loading ? <>
        
        <div className='flex justify-center items-center h-[100vh] w-full'><ClockLoader size={100} color="#36d7b7" /></div> :

        
      </> : <>
      <div className="App mx-auto ">
      <RouterProvider router={router}>

      </RouterProvider>
      
    </div>
      </>

    }
  </>);
}

export default App;
