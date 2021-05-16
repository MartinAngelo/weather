import React, { useState } from "react";
import { Link } from "react-router-dom";

import firebase from "../utils/firebase";

export default function Register() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  //const history = useHistory();

  const handleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();

    if (!payload.email || !payload.password || !payload.confirmPass) {
      alert("Please Complete all fields!")

    } else if (payload.password !== payload.confirmPass) {
      alert("Password does not match!");
    } else if (payload.password.length < 5) {
      alert("Password should be at least 6 characters")


    } else {
      //backend
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((signedInUser) => {
          //registered and signed in  
          alert("Registered and sign in as " + signedInUser.user.email);
          console.log(signedInUser.user);
        })
        .catch((error) => {
          //var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
        });
    }


  };

  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Welcome Back</h2>
          <h4 className="animation a2">Log in to your account using email and password</h4>
        </div>
        <div className="form">

          <label htmlFor="username">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange("email")}
            value={payload.email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange("password")}
            value={payload.password}
          />

          <label htmlFor="confirmPass">Confirm Password</label>
          <input
            type="password"
            name="confirmPass"
            onChange={handleChange("confirmPass")}
            value={payload.confirmPass}
          />

          <button onClick={register}>Register</button>
        </div>


        <Link to="./login">Login</Link>
      </div>

      <div class="right"></div>

    </div >

  );
}
