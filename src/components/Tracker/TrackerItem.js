import React, { Component } from "react";
import styled from 'styled-components';
import DatePick from '../DatePick';
import { BsBoxArrowUpRight } from "react-icons/bs";


const TrackerItemStyles = styled.div`
button {
	border: none;
	outline: none;
	background: none;
}
.tracker-item {
    display: flex;
    justify-content: space-around;
}
`;

function TrackerItem({ tracker, index, removeTracker }) {
    let date = new Date(tracker.date);
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();


    const removeHandle = i => {
        removeTracker(i);
    }

    return (
        <TrackerItemStyles>
        <div className="tracker-item">
            <button className="remove-item" onClick={() => 
            removeHandle(index)}>x</button>

            <div className="name">{tracker.name}</div>

            <div className="company">{tracker.company}</div>

            <div className="position">{tracker.position}</div>

            <div className="status"><select name="status" id="status"> 
			<option selected >Submitted</option>
			<option>First Interview</option>
			<option>Additional Interview</option>
			<option>Final Interview</option>
			<option>Offer</option>
			<option>Placement</option>
			<option value="Rejected">Rejected</option>
			<option>No Update</option>
			</select></div>

            <div className="date"><DatePick/></div>

            <div className="link"><a href={tracker.link} target="_blank"><BsBoxArrowUpRight/></a></div>

        </div>
        </TrackerItemStyles>
    )
}

export default TrackerItem;
