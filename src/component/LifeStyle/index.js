import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Fot from "./../fot/index";

// import Style from './style.css'

const Products = () => {
  const navigate = useNavigate();
  const [resSearch, setResSearch] = useState("");
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);

  const [book, setBook] = useState([]);
  useEffect(() => {
    getBook();
    // let essay = book.filter(item=>item.kind==Essays)
  }, []);
  const getBook = async () => {
    const display = await axios.get("http://localhost:5000/products/read");
    // console.log(display);
    setBook(display.data.filter((item) => item.kind == "Life Style"));
    console.log(display.data);
  };
  const getLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("newUser"))) {
      getDataEmail();
    }
    getLocalStorage();
    // eslint-disable-next-line
  }, []);
  const getDataEmail = async () => {
    const user = JSON.parse(localStorage.getItem("newUser"));
    const item = await axios.get(
      `http://localhost:5000/users/cart/${user.email}`
    );
    console.log(item, "item.data");
    setRemAdd(item.data);
    console.log("remAdd", remAdd);
  };

  const removeOrAdd = async (id) => {
    let test = [];
    console.log(id, "id");
    remAdd.forEach((item) => {
      test.push(item._id);
    });

    if (test.includes(id)) {
      // document.getElementById(`${id}`).innerHTML = "Add";

      await axios.put(
        `http://localhost:5000/users/removecart/${local.email}/${id}`
      );
    } else {
      // document.getElementById(`${id}`).innerHTML = "Remove";

      await axios.put(
        `http://localhost:5000/users/yourcart/${local.email}/${id}`
      );
    }
    test = [];
    getDataEmail();
    getLocalStorage();
  };

  const test1 = async () => {
    // console.log("here");
    let test = [];

    remAdd.forEach((item) => {
      // console.log("forEach");
      test.push(item._id);
    });
    console.log("test", test);

    if (test.length > 0) {
      console.log(" > 0");
      test.map((item) => {
        // console.log(item);
        // document.getElementById(`${item}`).innerHTML = "Remove";
      });
    }
    test = [];
  };

  useEffect(() => {
    // test1();
  }, [remAdd]);

  //  --------------
  const kick = () => {
    localStorage.clear();

    navigate("/signin");
  };
  return (
    <>
      {" "}
      <input onClick={kick} className="log" type="submit" value="LogOut" />{" "}
      <h1 className="h1h">Life Style </h1>
      <div className="bookscontainer">
        {book.map((item) => {
          return (
            <div className="books">
              <img src={item.img} className="img" />
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>
              <h4>{item.kind}</h4>
              <button className='addbtn'
                onClick={() => {
                  removeOrAdd(item._id);
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
      <Fot />
    </>
  );
};

export default Products;
