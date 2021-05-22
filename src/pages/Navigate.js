import React from 'react'
import { Link } from "react-router-dom";

import firebase from "../utils/firebase";

export default function Navigate() {

    const signout = () => {

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div class="navigate">
           
            <ul>
              
                <li><button className="button" onClick={signout}>SIGN OUT</button></li>
                <li><Link to="about">ABOUT</Link></li>
                <li><Link to="/profile">PROFILE</Link></li>
                <li><Link to="/home"> HOME </Link></li>

               

              
            </ul>
        </div>
    )
}
