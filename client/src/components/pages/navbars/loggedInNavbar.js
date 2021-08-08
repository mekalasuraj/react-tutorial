import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './App.css';
const LoggedInNavBar = () => {
  return (
    <>
      <Router>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Dashboard</Link>
          </li>
        </ul>
      </Router>
    </>
  );
};

export default LoggedInNavBar;
