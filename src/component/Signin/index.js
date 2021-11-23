import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
     
      email: "",
      password: "",
    };
  
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  
  

  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  submitSignUp(event) {
    event.preventDefault();
    const riges = {
     
     
      email: this.state.email,
      password: this.state.password,
      
    };
    
    // console.log(this.state.fullName.length);
    // console.log(this.state.userName.length);
    // console.log(this.state.email.length);
    // console.log(this.state.password.length);
    if (
     
     
      this.state.email.length > 0 &&
      this.state.password.length > 0

      
    ) {
      axios
        .get("http://localhost:5000/users/read", riges)
        .then((res) => console.log(res));
        console.log('ok');

      window.location = "/books";

      this.setState({
        
      
        email: "",
        password: "",
      });
    } else window.alert("fill all fields");
  }

  render() {
    return (
      <div>
        <div className="contener">
          <div className="formDiv">
            <form onSubmit={this.submitSignUp}>
             
            
              
              <input
                type="email"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}