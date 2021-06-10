import React, { Component } from 'react';
import LoginBtn from '../Login/LoginBtn';
import fire from '../../config/Fire';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogin
} from './NavbarElements';

class Navbar extends Component {

  state = {
    user: 1,
    loading: false,

}

componentDidMount() {
  this.authListener();
}

// logout function
logout = () => {
  fire.auth().signOut();
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

render(){


  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' /> 
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
          </NavLink>

          <NavLink to='/placed' activeStyle>
            Placed
          </NavLink>

          <NavLink to='/no-update' activeStyle>
            No Update
          </NavLink>

          <NavLink to='/rejected' activeStyle className="rejected">
            Rejected
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>


        
        <NavLogin>
          
        {!this.state.user ?
            (

        <NavLink className="sign_up" to='/sign-up' activeStyle>
            Sign Up
        </NavLink>,

        <NavBtn>
          <NavBtnLink to='/sign-in'><LoginBtn/></NavBtnLink>
        </NavBtn>

        ) : (<button className="exit" onClick={this.logout}>Log Out</button>)
        } 

        </NavLogin>
        

      </Nav>
    </>
  );
}
};

export default Navbar;
