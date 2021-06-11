import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const SidebarStyles = styled.div`
.navbar {
    position: absolute;
    top: 25px;
    right: 30px;
    background-color: #000000;
    border-radius: 5px;
    padding: 0;
    margin: 0;
    display: none;

    @media screen and (max-width: 768px) {
    display: flex;}
  }
  
  .bar_icon {
    color: #ffffff;
    font-size: 1.8rem;
    z-index: 1000;
    cursor: pointer;
    padding: 0;
    margin: 0;
    :hover{
      color: #ff0080;}
  }

  .bar_close {
    color: #ffffff;
    position: absolute;
    top: 25px;
    right: 30px;
    font-size: 1.8rem;
    cursor: pointer;
    :hover{
      color: #ff0080;}
  }
  
  .nav-menu {
    background-color: #000000;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    z-index: 1000;
  }
  
  .nav-menu.active {
    right: 0;
    transition: 350ms;
  }
  
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }
  
  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }
  
  .nav-text a:hover {
    background-color: #1a83ff;
  }
  
  .nav-menu-items {
    width: 100%;
  }
  
  .navbar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
 
  span {
    margin-left: 16px;
  }
`;


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <SidebarStyles>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        <div className='navbar'>      
            <FaIcons.FaBars onClick={showSidebar} className="bar_icon"/> 
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              
                <AiIcons.AiOutlineClose className="bar_close"/>
             
            </li>
        
              return (
                <li>
                  <Link to='#'>
                    
                    <span>Home</span>
                  </Link>
                </li>

                <li>
                  <Link to='#'>
                   
                    <span>Placed</span>
                  </Link>
                </li>

                <li>
                  <Link to='#'>
                    
                    <span>No Update</span>
                  </Link>
                </li>

                <li>
                  <Link to='#'>
                    
                    <span>Rejected</span>
                  </Link>
                </li>
              );
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
      </SidebarStyles>
    </>
  );
}

export default Sidebar;