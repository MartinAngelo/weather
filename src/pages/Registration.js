import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Navigate from "./Navigate";

import firebase from "../utils/firebase";

export default function Register() {
    const [login, setLogin] = useState({
        email: "",
        password: "",
        confirm: ""

    });

    const handleChange = (prop) => (e) => {
        setLogin({ ...login, [prop]: e.target.value });
    };


    const register = (e) => {
        e.preventDefault();

        if (!login.email || !login.password || !login.confirm) {
            alert("Please complete all fields")
        }
        else if (login.password !== login.confirm) {
            alert("Passwords do not match!")
        }
        else if (login.confirm.length < 5) {
            alert("Password should be at least 6 characters")
        }
        else {
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
        <div>
<Navigate />

            <div className="container">

                <section class="centerParent">
                    <h1 className="t1">Register</h1>
                    <p>Please fill in this form to create an account.</p>

                    <div class="centerContainer">
                        <table id="loginTable">
                            <tr>
                                <td><label for="email"><b>Email</b></label>
                                    <input type="email"
                                        name="email"
                                        class="textBox"
                                        placeholder="Email"
                                        onChange={handleChange("email")}
                                        value={login.email} />
                                </td>
                            </tr>
                            <tr>
                                <td> <label for="psw"><b>Password</b></label>
                                    <input type="password"
                                        name="password"
                                        class="textBox"
                                        placeholder="Password"
                                        onChange={handleChange("password")}
                                        value={login.password} />
                                </td>
                            </tr>
                            <tr>
                                <td> <label for="psw"><b>Confirm Password</b></label>
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
                                    <button className="btnLogin" onClick={register}> SIGN UP</button>
                                </td>
                            </tr>
                            <p>Already have an account? <Link to="./login">Log in</Link></p>



                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
