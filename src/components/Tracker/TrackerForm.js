import React, { useRef, useState } from 'react';
import styled from 'styled-components';


const TrackerFormStyles = styled.div`
div {
  display: flex;
  justify-content: space-between;
}

p {
  display: flex;
  justify-content: center;
}

input[type=text], input[type=url]{
  width: 200px;
  padding: 12px 20px;
  margin: 8px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 50%;
  background-color: #4CAF50;
  color: #000000;
  font-size: 20px;
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bolder;
}
input[type=submit]:hover {
  background-color: #45a049;
}
`;


function TrackerForm({tracker, setTracker}) {

    
    const name = useRef(null);
	const company = useRef(null);
	const position = useRef(null);
	const link = useRef(null);
    
	
    const Enter = e => {
        e.preventDefault();


        setTracker([...tracker, {
            "name": name.current.value,
			"company": company.current.value,
			"position": position.current.value,
			"link": link.current.value,
           
        }]);

        name.current.value = "";
		company.current.value = "";
		position.current.value = "";
		link.current.value = "";

 

    }
    return (
        <TrackerFormStyles>
        <form className="tracker-form" onSubmit={Enter}>
            <div>
			<input type="text" name="name" id="name" 
            placeholder="Name" ref={name}/>
            
			<input type="text" name="company" id="company" 
            placeholder="Company" ref={company}/>
			</div>

            <div>
			<input type="text" name="position" id="position" 
            placeholder="Position" ref={position}/>
			
			<input type="url" name="link" id="link"
			placeholder="Link" ref={link}/>
			</div>

			<p>
            <input type="submit" value="Enter"/>
			</p>

        </form>
        </TrackerFormStyles>
    );
}

export default TrackerForm;
