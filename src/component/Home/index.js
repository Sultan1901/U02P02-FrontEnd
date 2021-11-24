// import React from 'react'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";


import { BrowserRouter as Route ,Router ,Link } from 'react-router-dom'
import Style from './style.css'
// import Nav from "./component/Nav";
export const Home = () => {
    const navigate = useNavigate()
    const kick =()=>{
    
       
       
         navigate("/signin");
    }
    return (
        
        <div>
            <div className="home">
            <h1>Welcome To Home of Books</h1>
            <h1>plese login here</h1>
            
            <button className='nav1' onClick={kick}>Login</button>

            
            {/* <Nav /> */}

</div>
        </div>
    )
}
export default Home
