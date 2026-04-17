import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowProduct from "./Components/ShowProduct";
import UpdateProduct from "./Components/UpdateProduct";
import Home from "./Home";
import AddProduct from "./AddProduct";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const App = () => {
 


  return (
    <div>
      <Toaster />
      <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route path="/Products" element={<ShowProduct/>} /> 
     <Route path="/" element={ <Home/>}/>
      <Route path="/UpdateProduct" element={<UpdateProduct/>}/>
      <Route path="/Contact" element={<AddProduct/>}/>
        

      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
};

export default App;
