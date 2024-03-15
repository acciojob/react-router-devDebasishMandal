
import React from "react";
import './../styles/App.css';
import About from "./About";
import Home from "./Home";
import {Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <div>
        
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App
