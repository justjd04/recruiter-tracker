import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Login.css';
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


class Register extends Component {
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
                      placeholder="Your Name"
                      onChange={this.handleChange}
                      value={this.state.displayName}
                      name="displayName"/>

                   <input type="text" 
                      className="regField"
                      placeholder="Email"
                      onChange={this.handleChange}
                      value={this.state.email}
                      name="email"/>

                   <input type="password" 
                      className="regField"
                      placeholder="Password"
                      onChange={this.handleChange}
                      value={this.state.password}
                      name="password"/>
                   <input onClick={this.register} type="submit" className="submitBtn" value="REGISTER" />

                   <span className="underLine">
                    Have an account? <NavLink 
                    to='/sign-in' activeStyle>Sign in here</NavLink>
                  </span>

               </form>
            </>

            </div>) : (<Home />)
          }  
            
          </>
        );
    }
}

export default Register;