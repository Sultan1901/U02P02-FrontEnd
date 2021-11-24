import React, { useState, useEffect } from "react";
import axios from "axios";
// import Style from './style.css'
import { useNavigate } from "react-router";



const Products = () => {
  const navigate = useNavigate()

    const [book, setBook] = useState([]);
  const getBook = async () => {
    const display = await axios.get('http://localhost:5000/products/read');
    // console.log(display);
    setBook(display.data.filter(item=>item.kind=='Essays'));
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
     <> <input onClick={kick} className="log"
     type="submit"
     
     value="LogOut"
   /> <h1>Essays </h1>
    <div className="bookscontainer">
       
      {book.map((item) => {
        return (
        
          <div className="books">  
            <img src={item.img} className="img"/>
            <h4>{item.name}</h4>
            <h5>{item.price}</h5>
            <h5>{item.kind}</h5>
            <button >Add To Cart</button>
          </div>
        );
      })}
    </div></>)
}

export default Products
