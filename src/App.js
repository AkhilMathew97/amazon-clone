import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

import Header from "./components/main/Header"
import Home from "./components/main/Home"
import Checkout from "./components/checkout/Checkout"
import Login from "./components/login/Login"
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() =>{
    const unsubscrbe =  auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return() => {
      unsubscrbe();
    }
  },[])
console.log("User is: ",user)
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>  
          <Route path="/login">
            <Login />
          </Route>  
          <Route path="/">
            <Header />
            <Home />
          </Route>  
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
