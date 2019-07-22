import fakeAuthCentralState from './PrivateRoute';
import React,{Component} from 'react';
import {BrowserRouter as Route,Redirect,} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
       fakeAuthCentralState.isAuthenticated === true ? 
          <React.Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
    )} />
 );
 export default ProtectedRoute;