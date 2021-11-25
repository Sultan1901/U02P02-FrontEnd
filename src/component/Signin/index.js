import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Style from "./style.css";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const items = await axios.get("http://localhost:5000/users/read");
    setUsers(items.data);
    console.log(items.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const registerPage = () => {
    navigate("/signup");
  };

  const submitlogin = (e) => {
    e.preventDefault();
    let ckeck = false;
    // eslint-disable-next-line
    // console.log(users);
    // console.log(users[0].email);
    // console.log("log email",email);
    // console.log("log pass",password);
    users.map((item) => {
      console.log(item.email);
      console.log(item.password);
      if (item.email === email && item.password === password) {
        ckeck = true;
      }
    });
    if (ckeck) {
      try {
        localStorage.setItem("newUser", JSON.stringify({ email }));
        navigate("/Category");
      } catch (error) {
        console.log("error ", error);
      }
    } else {
      let myWindow = alert(" Wrong email or password");
      // myWindow.document.write("<p> Wrong email or password </p>");
      // myWindow.focus();
    }
  };

  return (
    <div>
      <div >
        <div >
          <form className="box" onSubmit={submitlogin}>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-group"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-group"
            />
            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="Login"
            />
          </form>
        </div>
      </div>
      {/* <p onClick={registerPage}>Don't have an account ?</p> */}
    </div>
  );
};

export default Login;
