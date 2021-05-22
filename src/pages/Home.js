import React from 'react'
import Navigate from "../pages/Navigate";

import pic from "../images/Screenshot (393).png"

export default function Home() {
    return (
        <div className="bgcolor">
            <div >
                <Navigate />
                <div className="image">
                    <img src={pic} width="93%" height="90%" alt="pic" />


                </div>
            </div>
        </div>
    )
}
