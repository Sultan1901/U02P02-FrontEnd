import React from "react";
// import Nav from "../Nav";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Fot from './../fot'
import './style.css'
const Cart = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);

  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  const getData = async () => {
    const item = await axios.get(
      `https://sultanp2b.herokuapp.com/users/cart/${local.email}`
    );
    setAccount(item.data);
  };

  useEffect(() => {
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  // Navigate to character info


  // Remove from favorite
  const removeFavorite = (id) => {
    axios.put(
      `https://sultanp2b.herokuapp.com/users/removecart/${local.email}/${id}`
    );
    getLocalStorage();
  };
  return (
    <>
    <div>
      {/* <Nav /> */}
      
      {account.length &&
        account.map((item, i) => {
          return (
            <div className="bookscontainer" id="ddd">
            <div className="books">
             
              <img src={item.img} className="img88" />
              
              <button className="rmbtn" onClick={()=>{removeFavorite(item._id)}}>Remove from Cart</button>
            </div><h4>{item.name}</h4>
              <h4>{item.price}</h4>
              </div>
          );
        })}
      </div>
     
      <Fot />
    </>
        )}
     
   
  


export default Cart;
