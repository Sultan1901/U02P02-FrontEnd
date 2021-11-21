import React, { Component, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import './App.css';
import Home from "./component/Home";
import Nav from "./component/Nav";
// import Users from './component/Users'
import Users from "./component/Users/Users";
import { useState } from "react/cjs/react.development";
import axios from "axios";

// Axios({
//   method: "GET",
//   url: "http://localhost:5000/",

// }).then(res => {
//   console.log(res.message);
// });
///////////////////////////////

function App() {
  const [name, setName] = useState("");
  const [home, setHome] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/home").then((response) => {
      setHome(response.data);
    });
  }, []);
  async function postname(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/post_name", {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <form onSubmit={postname}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit">send to Backend</button>
      </form>
      {home}
    </div>
  );
}

export default App;
