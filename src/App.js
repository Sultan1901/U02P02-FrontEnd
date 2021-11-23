import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Products from "./component/Products";
import Signup from "./component/signup";
import Signin from "./component/Signin";
function App() {
  return (
    <>
   <Routes>
     <Route exact path ="/Books" element={<Products/>}/>
     <Route exact path ="/signup" element={<Signup/>}/>
     <Route exact path ="/signin" element={<Signin/>}/>
   </Routes>
    </>
  );
}
export default App;