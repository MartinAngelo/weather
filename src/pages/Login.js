import React, { useState } from 'react'
import {Link} from "react-router-dom";

import firebase from "../utils/firebase";

export default function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    
    });

    const handleChange = (prop) => (e) => {
    setLogin({ ...login, [prop]: e.target.value});
    };

    const sign = (e) => {
    e.preventDefault();

    if(!login.email || !login.password) 
    {
        alert("Please complete all fields")
    } 
    else{
              //backend part
              firebase
                .auth()
                .signInWithEmailAndPassword(login.email, login.password)
                .then((userCredential) => {
                // Signed in 
                    alert("Signed In")
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
                <label class="faceboot">facebuko</label>
                    <div>
                        <label class="connect">Let's keep in touch.</label>
                    </div>
                    <div class="createLog">
                        <label class="log">Log in your Account</label>
                    </div>
                        <div class="centerContainerLog">
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
                                        <button id="btnLogin" class="btnCorner" onClick={sign}> LOG IN</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>or</label></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/registration">
                                        <button id="btnLogin" class="btnReg"> SIGN UP</button>
                                        </Link>
                                    </td>
                                </tr>

                            </table>
                        </div>
             </section>
        </div>
    )
}
