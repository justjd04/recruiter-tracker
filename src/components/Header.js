import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import TrackerForm from './Tracker/TrackerForm';
//import TrackerList from './Tracker/TrackerList';



const HeaderStyles = styled.div`
h1 {
    position: absolute;
    top: 110px;
    margin: 0 50px;
    display: flex;
	  color: #ee0077;
	  font-size: 32px;
	  font-weight: 600;
    
}
h3 {
  position: absolute;
  top: 160px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
	background-color: #FFF;
	border-radius: 5px;
	transition: 0.4s;
	padding: 15px 40px;
  background-color: #000080;
}
span {
  display: inline-block;
  color: #FFF;
	width: 20%;
  background-color: #FFF;
  margin: 5px;
  padding: 0;
  background-color: #000080;
}
`;

function Header() {

    const [tracker, setTracker] = useState([]);

    return (
        <HeaderStyles>
         
           <h1>Recruiter Tracker</h1>

           <h3>

             <span>Name</span>
             <span>Company</span>
             <span>Position</span>
             <span>Status</span>
             <span>Last Update</span>

            </h3>
            
            {/*
           <TrackerForm tracker={tracker} setTracker={setTracker} />
           <TrackerList tracker={tracker} setTracker={setTracker} /> 
           */}

           
        

        </HeaderStyles>   
    );
}

export default Header;