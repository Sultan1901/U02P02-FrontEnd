// import React from 'react'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import "./Style1.css";
// import Nav from "./component/Nav";
export const Category = () => {
  const navigate = useNavigate();
  const Essays = () => {
    navigate("/Essays");
  };
  const LifeStyle = () => {
    navigate("/LifeStyle");
  };
  const Cultural = () => {
    navigate("/Cultural");
  };
  const Stories = () => {
    navigate("/Stories");
  };

  return (
    <div>
      <div id="home">
        <h1 className="h1h">plese Choose Category</h1>

        <button className="nav1" onClick={Essays}>
          Essays
        </button>
        <button className="nav1" onClick={LifeStyle}>
          LifeStyle
        </button>
        <button className="nav1" onClick={Cultural}>
          Cultural
        </button>
        <button className="nav1" onClick={Stories}>
          Stories
        </button>

        {/* <Nav /> */}
      </div>
    </div>
  );
};
export default Category;
