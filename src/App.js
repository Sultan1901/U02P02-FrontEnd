import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./component/Home";
import Products from "./component/Products";
import Signup from "./component/signup";
import Signin from "./component/Signin";
import LifeStyle from "./component/LifeStyle";
import Essays from "./component/Essays";
import Cultural from "./component/Cultural";
import Stories from "./component/Stories";
import Nav from "./component/Nav";


function App() {
  return (
    <>
    <Nav/>
   <Routes>
   <Route exact path ="/" element={<Home/>}/>
     <Route exact path ="/Books" element={<Products/>}/>
     <Route exact path ="/signup" element={<Signup/>}/>
     <Route exact path ="/signin" element={<Signin/>}/>
     <Route exact path ="/LifeStyle" element={<LifeStyle/>}/>
     <Route exact path ="/Essays" element={<Essays/>}/>
     <Route exact path ="/Cultural" element={<Cultural/>}/>
     <Route exact path ="/Stories" element={<Stories/>}/>
     <Route exact path ="/Nav" element={<Nav/>}/>
   </Routes>
    </>
  );
}
export default App;