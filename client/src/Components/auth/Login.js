import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e =>{
        e.preventDefault();
        
        const userData = {
            email: this.state.email,
            password: this.state.password
          };
        
        axios.post('/api/users/login',userData).then((result)=>{
        localStorage.setItem('jwtToken',result.data.token);
        this.props.history.push('/home');
        })
        console.log(userData);
       
    }
    render(){
        const { errors } = this.state;
        return(
            <div className='container'>
                <div className="row">
                    <div className="col s8 ">
                        <Link to="/" className='btn-flat waves-effect'>Back to home</Link>
                    </div>
                </div>
                <div className="col s12">
              <h4>
                <b>Login</b>
              </h4>
            </div>
                <form onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
              <div className="col s12">
                <button
                  type="submit"
                  className="btn"
                >
                  Login
                </button>
              </div>
                </form>
            </div>
        )
    }
}

export default Login;