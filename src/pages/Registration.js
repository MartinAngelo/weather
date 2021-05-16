import React, { useState } from 'react'
import {Link} from "react-router-dom";

import firebase from "../utils/firebase";

export default function Register() {
    const [login, setLogin] = useState({
        email: "",
        password: "",
        confirm: ""
    
    });

    const handleChange = (prop) => (e) => {
    setLogin({ ...login, [prop]: e.target.value});
};


const register = (e) => {
    e.preventDefault();

    if(!login.email || !login.password || !login.confirm) 
    {
        alert("Please complete all fields")
    } 
    else if(login.password !== login.confirm)
    {
        alert("Passwords do not match!")
    }
    else if(login.confirm.length <5)
    {
        alert("Password should be at least 6 characters")
    }
    else{
              //backend part
              firebase
                .auth()
                .createUserWithEmailAndPassword(login.email, login.password)
                .then((userCredential) => {
                // Signed in 
                    alert("Registered and Signed In")
                // ...
                })
                .catch((error) => {
                 let errorMessage = error.message;
                 alert(errorMessage)
                // ..
                });
    }

}
    return (
        <div id="loginBody">
            <section class="centerParent">
                <label class="faceboot">faceboot</label>
                    <div>
                    <label class="connect">Let's keep in touch.</label>
                    </div>
                    <div class="create">
                    <label class="log">Create a New Account</label>
                    </div>
                <div class="centerContainer">
                    <table id="loginTable">
                        <tr>
                            <td>
                                <input type="email" 
                                       name="email" 
                                       class="textBox" 
                                       placeholder="Email" 
                                       onChange={handleChange("email")} 
                                       value={login.email} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" 
                                       name="password" 
                                       class="textBox" 
                                       placeholder="Password" 
                                       onChange={handleChange("password")} 
                                       value={login.password} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" 
                                       name="confirm" 
                                       class="textBox" 
                                       placeholder="Confirm Password" 
                                       onChange={handleChange("confirm")} 
                                       value={login.confirm} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button id="btnLogin" class="btnReg" onClick={register}> SIGN UP</button>
                            </td>
                        </tr>
                        <tr>
                            <td><label>or</label></td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/login">
                                <button id="btnLogin" class="btnCorner"> LOG IN</button>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
    )
}
