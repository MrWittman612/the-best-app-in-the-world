import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DashBoard } from './components/dashboard/DashBoard';
import ForgotPassword from './components/authPages/forgot-password/ForgotPassword';

import Login from './components/authPages/login/Login';
import Register from './components/authPages/register/Register';
import { PrivateRoute } from './utils/PrivateRoute';
import { checkAuth } from './utils/auth';

checkAuth();
function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={DashBoard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default App;
