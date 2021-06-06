import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TrackerList from './TrackerList';

const TrackerPageStyles = styled.div`
.tracker_page {
	padding: 30px;
}
`;


function TrackerPage() {

  const [tracker, setTracker] = useState([]);

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < tracker.length; i++) {
      temp += parseInt(tracker[i].price);
    }

  }, [tracker]);
  
  return (
    <TrackerPageStyles>
    <div className="tracker_page">
    <TrackerList tracker={tracker} setTracker={setTracker} />
    </div>
    </TrackerPageStyles>
  );
}

export default TrackerPage;