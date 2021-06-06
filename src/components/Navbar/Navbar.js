import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' /> 
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/placed' activeStyle>
            Placed
          </NavLink>
          <NavLink to='/no-update' activeStyle>
            No Update
          </NavLink>
          <NavLink to='/rejected' activeStyle>
            Rejected
          </NavLink>
          <NavLink to='/sign-in' activeStyle>
            Sign In
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
