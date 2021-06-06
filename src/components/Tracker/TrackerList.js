import React from 'react';
import TrackerItem from './TrackerItem';
import styled from 'styled-components';

const TrackerListStyles = styled.div`
.tracker-list {
	padding: 15px;
}

.tracker-list .tracker-item {
	position: relative;
	padding: 10px 15px;
	background-color: #FFF;
	border-radius: 8px;
	margin-bottom: 15px;
	display: flex;
	transition: 0.4s;
	padding-left: 75px;
}

.tracker-list .tracker-item .remove-item {
	position: absolute;
	width: 0;
	top: 0;
	left: 0;
	bottom: 0;
	overflow: hidden;

	cursor: pointer;
	display: block;
	color: #F8F8F8;
	font-weight: 600;
	background-color: #FF1E2D;
	border-radius: 8px 0px 0px 8px;
	transition: 0.2s;
}

.tracker-list .tracker-item:hover .remove-item {
	width: 50px;
}

.tracker-list .tracker-item .name
.tracker-list .tracker-item .company
.tracker-list .tracker-item .position {
	flex: 1 1 100%;
}

.tracker-list .tracker-item .price,
.tracker-list .tracker-item .date {
	min-width: 125px;
}
.tracker-list .tracker-item:hover {
	box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
}
`;


function TrackerList( {tracker, setTracker } ) {

    const removeTracker = i => {
        let temp = tracker.filter((v, index) => index != i);
        setTracker(temp);
    }

    const sortByDate = (a, b) => {
        return b.date - a.date;
    }

    return (
        <TrackerListStyles>
        <div className="tracker-list">
            {
                tracker.sort(sortByDate).map((value, index) => (
                    <TrackerItem
                    key={index}
                    tracker={value}
                    index={index}
                    removeTracker={removeTracker}
                    />
                ))
            }
            
        </div>
        </TrackerListStyles>
    );
}

export default TrackerList;
