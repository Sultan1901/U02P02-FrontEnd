// import React from 'react'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./style.css";
// import fot from "./component/fot";
export const Home = () => {
  const navigate = useNavigate();
  const signin = () => {
    navigate("/signin");
  };
  const signup = () => {
    navigate("/signup");
  };

  return (
    <div><div className='ccec'>
      <h1 className="h1h">Welcome To Home of Books</h1>
      <h1 className="h1h">plese Signup or login here</h1>

      <button className="nav11" onClick={signin}>
        Login
      </button>
      <button className="nav11" onClick={signup}>
        signup
      </button>
<div className='ccc'></div>
    </div></div>
  );
};
export default Home;
