import React, { useEffect, useState } from 'react'
import Navigate from "./Navigate";

import firebase from "../utils/firebase";

export default function Profile() {

    const [state, setState] = useState({
        user: null
    })

    useEffect(() => {
        var signedUser = firebase.auth().currentUser;

        if (signedUser) {
            // User is signed in.
            setState({ user: signedUser })
        } else {
            // No user is signed in.
            setState(null)
        }
    }, [])

    return (
        <div className="profile">
            <div>
                <Navigate />
                <h1>Account Information</h1>
                
                <h2 class="tag">{state.user ? state.user.email : "null"}</h2>
            </div>
        </div>
    )
}