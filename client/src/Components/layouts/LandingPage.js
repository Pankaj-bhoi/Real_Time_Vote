import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
    render(){
        return(
            <nav>
              <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right">
                  <li><Link to='/login' >Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </ul>
              </div>
            </nav>
        )
    }
}
export default LandingPage;