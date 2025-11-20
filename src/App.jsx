import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowProduct from "./Components/ShowProduct";
import UpdateProduct from "./Components/UpdateProduct";

const App = () => {
 


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <UpdateProduct/>
      <Routes>
    <Route path="/Products" element={<ShowProduct/>} /> 
        

      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
};

export default App;
