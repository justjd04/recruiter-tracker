import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`;


export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  
  :hover{
      color: #ff0080;
  }

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;


  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLogin = styled.div`
  display: flex;
  align-items: center;

  .sign_up {
    position: relative;
    left: 35px;
  }


  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }

  .exit {
            position: absolute;
            top: 20px;
            right: 40px;
            font-size: 16px;
            text-align: center;
            font-family: sans-serif;
            color: #ffffff;
            height: 40px;
            width: 80px;
            padding: 10px 5px;
            border: 0;
            cursor: pointer;
            font-size: 16px;
            border-radius: 50px;
            overflow: hidden;
            background: #000000;

            :hover{
             color: #ff0080;
            }
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
`;
