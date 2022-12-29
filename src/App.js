import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';

function App() {
  return (
    <div className="App max-w-[1600px] mx-auto ">
      <RouterProvider router={router}>

      </RouterProvider>
      
    </div>
  );
}

export default App;
