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
	position: relative;
    display: flex;
    margin: 5px;
	background-color: #FFF;
	border-radius: 5px;
	transition: 0.4s;
	padding: 5px 40px;
    box-shadow: 0px 0px 6px rgba(137, 196, 244, 0.5);
}
.tracker-item:hover {
	box-shadow: 0px 0px 6px rgba(77, 5, 232, 0.5);
}

.remove-item {
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

.tracker-item:hover .remove-item {
	width: 30px;
}

.name, .company, .position, .status, .date {
	display: inline-block;
	width: 20%;
    background-color: #FFF;
    margin: 5px;
    padding: 0
}

.link {
	position: absolute;
    text-align: center;
	right: 10px;
    top: 10px;
	width: 30px;  
}
.link_icon {
    color: #FF1E2D;
    font-size: 20px;
    border-radius: 3px;
}
.link_icon:hover {
    box-shadow: 0px 0px 6px rgba(246, 36, 89, 1);
}
#status {
    font-size: 17px;
    text-align: center;
    border-radius: 3px;
}
#status:hover{
    box-shadow: 0px 0px 6px rgba(3, 201, 169, 1)
}


#option7, #option8 {
    color: #FF1E2D;
}
#option5, #option6 {
    color: #00a200;
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
			<option id="option1" selected >Submitted</option>
			<option id="option2">First Interview</option>
			<option id="option3">Additional Interview</option>
			<option id="option4">Final Interview</option>
			<option id="option5">Offer</option>
			<option id="option6">Placement</option>
			<option id="option7">Rejected</option>
			<option id="option8">No Update</option>
			</select></div>

            <div className="date"><DatePick/></div>

            <div className="link"><a href={tracker.link} target="_blank"><BsBoxArrowUpRight className="link_icon"/></a></div>
        </div>
        </TrackerItemStyles>
    )
}

export default TrackerItem;
