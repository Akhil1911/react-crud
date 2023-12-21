import React from 'react'
import Routing from './Components/Routing';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,Flip } from 'react-toastify';
const App = () => {
  return (
    <>
      <ToastContainer transition={Flip} />
      <Routing />
    </>
  );
}

export default App