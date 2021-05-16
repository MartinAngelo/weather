import React from 'react'

import { Route, Redirect } from "react-router-dom"

export default function PrivateRouter({ 
    component: Component, 
    isAuth, 
    ...rest 
}) {
    return (
    <Route 
        {...rest} 
        component={(props) =>
            isAuth ? <Component {...props} /> : <Redirect to="/login" />

        } 
    />
    );

}
