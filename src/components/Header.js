import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TrackerList from './Tracker/TrackerList'

const HeaderStyles = styled.div`
h1 {
    position: absolute;
    top: 100px;
    margin: 0 40px;
    display: flex;
    justify-content: center;
	color: #ee0077;
	font-size: 32px;
	font-weight: 600;
    position: absolute;
}
`;

function Header() {

    const [tracker, setTracker] = useState([]);

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < tracker.length; i++) {
      temp += parseInt(tracker[i].price);
    }

  }, [tracker]);

    return (
        <HeaderStyles>
        <header>
           <h1>Recruiter Tracker</h1>

        <TrackerList tracker={tracker} setTracker={setTracker} />
      
        </header>
        </HeaderStyles>
    );
}

export default Header;
