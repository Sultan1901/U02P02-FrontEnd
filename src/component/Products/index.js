import React, { useState, useEffect } from "react";
import axios from "axios";
import Style from './style.css'
import { useNavigate } from "react-router";
// import { useState, useEffect } from "react";


const Products = () => {
  const navigate = useNavigate()
    const [book, setBook] = useState([]);
  const getBook = async () => {
    const display = await axios.get(
      "https://sultanp2b.herokuapp.com/products/read"
    );
    console.log(display);
    setBook(display.data);
    
  };
  useEffect(() => {
    
    getBook();
  }, []);
  const kick =()=>{
    
    localStorage. clear()
   
     navigate("/signin");
}
  return (
    <>
     <input onClick={kick} className="log"
                type="submit"
                
                value="LogOut"
              />
    <div className="bookscontainer">
      {book.map((item) => {
        return (
          
          <div className="books">
            <img src={item.img} className="img"/>
            <h4>{item.name}</h4>
            <h4>{item.price}</h4>
         <h4>{item.kind}</h4>
            <button >Add To Cart</button>
           
          </div>
          
        );
      })}
    </div>
    </>)
}

export default Products
