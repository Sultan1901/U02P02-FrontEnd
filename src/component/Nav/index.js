import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";
    

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  /* const navigate = useNavigate()
    const goBack = () => {
        navigate.goBack()
    } */
    
    const Logout = () => {
      const kick =()=>{
          localStorage. clear()
          console.log('u kicked')}}
  return (
    <div className="nav">
      <ul className="ulNav">
        {/* <li className={splitLocation[1] === "" ? "active" : ""}> */}
       <li>   <Link to="/">Home</Link>{" "}</li>
         {/* <li> <Link to="/books">Products</Link>{" "}</li> */}
         {/* <li><Link to="/Signin">Signin</Link>{" "}</li> */}
         {/* <li><Link to="/Signup">Sigup</Link>{" "}</li> */}
         <li><Link to="/Stories">Stories</Link>{" "}</li>
         <li><Link to="/LifeStyle">LifeStyle</Link>{" "}</li>
         <li><Link to="/Essays">Essays</Link>{" "}</li>
         <li><Link to="/Cultural">Cultural</Link>{" "}</li>
         {/* <li> <Link to="/Logout">Logout</Link>{" "}</li> */}
        {/* </li> */}
      
      </ul>
    </div>
  );
};
export default Nav;
