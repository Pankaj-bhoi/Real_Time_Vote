import fakeAuthCentralState from './PrivateRoute';
import React,{Component} from 'react';
import {BrowserRouter as withRouter} from 'react-router-dom';

const AuthButton = withRouter(({ history }) => (
    fakeAuthCentralState.isAuthenticated ? (
       <p>Welcome to  amazing content! <button onClick={() => {
          fakeAuthCentralState.signout(() => history.push('/'))
          }}>Sign out</button>
       </p>
    ) : (
       <p>You are not logged in.</p>
    )
 ));
 export default AuthButton;