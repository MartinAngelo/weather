import React, {useState, useEffect} from 'react'


import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

//routers
import PrivateRouter from "./routers/PrivateRouter";
import PublicRouter from "./routers/PublicRouter";

//firebase
import firebase from "./utils/firebase";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import About from "./pages/About";

//css
import "./Css/login.css";
import "./Css/nav.css";
import "./Css/home.css";
import "./Css/profile.css";

function App() {

  const [state, setState] = useState({
    isAuth: false,
    isLoading: true
  })


  useEffect(() => {
    firebase
    .auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        setState({isAuth: true, isLoading: false})
      } else {
        // No user is signed in.
        setState({isAuth: false, isLoading: false})
      }
    });
  }, [])
    
 
  if(state.isLoading)
  {
    return <p> Loading... </p>
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" exact/>
        </Route>
        
        <PublicRouter component={Login} isAuth={state.isAuth} restricted={true} path="/login" exact />
        <PublicRouter component={Registration} isAuth={state.isAuth} restricted={true} path="/registration" exact/>
        
        <PrivateRouter component={Home} isAuth={state.isAuth} path="/home" exact/>
        <PrivateRouter component={Profile} isAuth={state.isAuth} path="/profile"/>
        <PrivateRouter component={About} isAuth={state.isAuth} path="/about"/>
      </Switch>
    </Router>
  );
}

export default App;
