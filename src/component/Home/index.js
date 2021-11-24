// import React from 'react'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";


import { BrowserRouter as Route ,Router ,Link } from 'react-router-dom'
import Style from './style.css'
// import Nav from "./component/Nav";
export const Home = () => {
    const navigate = useNavigate()
    const signin =()=>{
    
       
       
         navigate("/signin");
    }
    const signup =()=>{
    
       
       
        navigate("/signup");
   }
    
    
    return (
        
        <div>
            <div id="home">
            <h1>Welcome To Home of Books</h1>
            <h1>plese Signup or login here</h1>
            
            <button className='nav1' onClick={signin}>Login</button>
            <button className='nav1' onClick={signup}>signup</button>

            
            {/* <Nav /> */}

</div>
        </div>
    )
}
export default Home
