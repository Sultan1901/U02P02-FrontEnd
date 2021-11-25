import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import Signup from "./component/signup";
import Signin from "./component/Signin";
import LifeStyle from "./component/LifeStyle";
import Essays from "./component/Essays";
import Cultural from "./component/Cultural";
import Stories from "./component/Stories";
import Nav from "./component/Nav";
import Logout from "./component/Logout";
import Category from "./component/Category";
import Fot from "./component/fot";
import "./App.css";

function App() {
  return (
    <div className="home">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Books" element={<Products />} />
        <Route exact path="/Category" element={<Category />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/LifeStyle" element={<LifeStyle />} />
        <Route exact path="/Essays" element={<Essays />} />
        <Route exact path="/Cultural" element={<Cultural />} />
        <Route exact path="/Stories" element={<Stories />} />
        <Route exact path="/Nav" element={<Nav />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
      
    </div>
  );
}
export default App;
