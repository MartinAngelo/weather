import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Navigate from "./Navigate";

import firebase from "../utils/firebase";

export default function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: "",

    });

    const handleChange = (prop) => (e) => {
        setLogin({ ...login, [prop]: e.target.value });
    };

    const sign = (e) => {
        e.preventDefault();

        if (!login.email || !login.password) {
            alert("Please complete all fields")
        }
        else {
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
        <div>
            <Navigate />
            <div class="container">
                <section>

                    <h1>Log In</h1>
                    <p>Please fill in this form to Log in an account.</p>


                    <div class="centerContainerLog">
                        <table id="loginTable">
                            <tr>
                                <td> <label for="email"><b>Email</b></label>
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
                                    <label for="psw"><b>Password</b></label>
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
                                    <button className="btnLogin" onClick={sign}> LOGIN</button>
                                </td>
                            </tr>


                            <p>Don't have an account? <Link to="./registration">Create account</Link></p>




                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
