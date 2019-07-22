import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import LandingPage from './Components/layouts/LandingPage';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Home from './Components/home';
// import Vote from './Components/Vote';
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
            <LandingPage/>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home}/>
            {/* <Vote /> */}
          </div>
        </Router>
  );
}

export default App;
