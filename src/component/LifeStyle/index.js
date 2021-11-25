import React, { useState, useEffect } from "react";
import axios from "axios";
// import Style from './style.css'
import { useNavigate } from "react-router";
import Fot from "./../fot/index";



const Products = () => {
  const navigate = useNavigate()

    const [book, setBook] = useState([]);
  const getBook = async () => {
    const display = await axios.get('http://localhost:5000/products/read');
    // console.log(display);
    setBook(display.data.filter(item=>item.kind=='Life Style'));
    console.log(display.data);
  };
  useEffect(() => {
    

    getBook();
    // let essay = book.filter(item=>item.kind==Essays)
  }, []);
  const kick =()=>{
    
    localStorage. clear()
   
     navigate("/signin");
}
  return (
    <>
      {" "}
      <input onClick={kick} className="log" type="submit" value="LogOut" />{" "}
      <h1 className="h1h">Life Style</h1>
      <div className="bookscontainer">
        {book.map((item) => {
          return (
            <div className="books">
              <img src={item.img} className="img" />
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>
              <h4>{item.kind}</h4>
              <button>Add To Cart</button>
            </div>
          );
        })}
      </div>
      <Fot />
    </>
  );
}

export default Products
