import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DashBoard } from './components/dashboard/DashBoard';
import ForgotPassword from './components/authPages/forgot-password/ForgotPassword';

import Login from './components/authPages/login/Login';
import Register from './components/authPages/register/Register';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={DashBoard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default App;
