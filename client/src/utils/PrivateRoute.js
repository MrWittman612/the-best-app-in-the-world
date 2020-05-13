import React from 'react';
import { checkAuth } from './auth';
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        checkAuth() ? (
          children
        ) : (
          <Redirect to={{ pathname: 'login', state: { from: location } }} />
        )
      }
    />
  );
}
