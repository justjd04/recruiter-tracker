import React, { Component } from 'react';
import './Login.css';
import fire from '../../config/Fire';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Spinner from '../../assets/loader.gif';
import Home from '../../pages/Home';


export const NavLink = styled(Link)`
  cursor: pointer;
  
  :hover{
      color: #ff0080;
  }

  &.active {
    color: #15cdfc;
  }
`;

class Login extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: ''
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    state = {
        user: 1,
        loading: false,
        formSwitcher: false

    }

    componentDidMount() {
      this.authListener();
    }

    authListener(){
      fire.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({user});
        }else{
          this.setState({user:null});
        }
      });
    }

    render() {

      if(this.state.user === 1) {
        return (
          <div className="mainBlock">
            <div className="Spinner">
              <img src={Spinner} alt="Spinner" className="ImgSpinner" />
            </div>
          </div>
        )

      }

      let errorNotification = this.state.fireErrors ?
          (<div className="Error">{this.state.fireErrors}</div>) : null

        return(
          <>
          {!this.state.user ?
            (<div className="mainBlock">

<>
               {errorNotification}
               <form>
                   <input type="text" 
                      className="regField"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"/>

                   <input type="password" 
                      className="regField"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"/>
                   <input onClick={this.login} type="submit" className="submitBtn" value="SIGN IN" />

                   <span className="underLine">
                    Not Registered? <NavLink 
                    to='/sign-up' activeStyle>Create an account</NavLink>
                </span>

               </form>
            </>

              

            </div>) : (<Home />)
          }  
            
          </>
        );
    }
}


export default Login;