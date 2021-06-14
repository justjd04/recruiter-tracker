import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import fire from '../../config/Fire';
import DatePick from '../DatePick';

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

.enter_new {
    width: 100%;
    background: linear-gradient(to right top, #011d79, #4d58f5);
    border: 0;
    color: #b6c2ec;
    padding: 15px;
    margin: 10px 10px 0 10px;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
}

.enter_new:hover {
    color: #ffffff;
    background: linear-gradient(to right top, #011d79, #434cce);

}
`;


class TrackerForm extends React.Component {

  state = {
      transactions: [],

      name: '',
      company: '',
      position: '',
      link: '',
      status: '',
      date: '',
      currentUID: fire.auth().currentUser.uid
  }


  handleChange = input => e => {
      this.setState({
          [input]: e.target.value !=="0" ? e.target.value : ""
      });
  }



  // add transaction
  addNewTransaction = () => {
      const {name, company, position, link, status, date, currentUID} = this.state;
      

      // validation
      if(name && company && position && link){

          const BackUpState = this.state.transactions;
          BackUpState.push({
              id: BackUpState.length + 1,
              name: name,
              company: company,
              position: position,
              status: status,
              date: date,
              link: link,
              user_id: currentUID
          });
          
          fire.database().ref('Transactions/' + currentUID).push({
              id: BackUpState.length,
              name: name,
              company: company,
              position: position,
              status: status,
              date: date,
              link: link,
              user_id: currentUID
          }).then((data) => {
              //success callback
              console.log('success callback');
              this.setState({
                  transactions: BackUpState,
                  name: '',
                  company: '',
                  position: '',
                  status: '',
                  date: '',
                  link: ''
              })
          }).catch((error)=>{
              //error callback
              console.log('error ' , error)
          });

      }
  }

  componentWillMount(){
      const {currentUID} = this.state;
      const BackUpState = this.state.transactions;
      fire.database().ref('Transactions/' + currentUID).once('value',
      (snapshot) => {
          // console.log(snapshot);
          snapshot.forEach((childSnapshot) => {
              
              BackUpState.push({
                  id: childSnapshot.val().id,
                  name: childSnapshot.val().name,
                  company: childSnapshot.val().company,
                  position: childSnapshot.val().position,
                  link: childSnapshot.val().link,
                  status: childSnapshot.val().status,
                  date: childSnapshot.val().date,
                  user_id: childSnapshot.val().user_id
              });
              // console.log(childSnapshot.val().name);
          });
          this.setState({
              transactions: BackUpState,
          });
      });
  }
    render() {
    return (

        <TrackerFormStyles>

        <form className="tracker-form">
      <div>
			<input
      onChange={this.handleChange('name')}
      value={this.state.name}
      placeholder="Name"
      type="text"
      name="name"
      id="name"
      />

      <input
      onChange={this.handleChange('company')}
      value={this.state.company}
      placeholder="Company"
      type="text"
      name="company"
      id="company"
     />
     </div>
     <div>   
			<input 
      onChange={this.handleChange('position')}
      value={this.state.position}
      placeholder="Position"
      type="text"
      name="position"
      id="position"
      />

			<input 
      onChange={this.handleChange('link')}
      value={this.state.link}
      placeholder="Link"
      type="url"
      name="link"
      />
      </div>

      <div style={{display:"none",}}>

      <div className="status">
			onChange={this.handleChange('status')}
			value={this.state.status}
			<select name="status" id="status"> 
			<option value="submitted" id="option1" selected >Submitted</option>
			<option value="first interview" id="option2">First Interview</option>
			<option value="additional interview" id="option3">Additional Interview</option>
			<option value="final interview" id="option4">Final Interview</option>
			<option value="offer" id="option5">Offer</option>
			<option value="placement" id="option6">Placement</option>
			<option value="rejected" id="option7">Rejected</option>
			<option value="no update" id="option8">No Update</option>
			</select></div>

      <div className="date" name="date" id="date"
      onChange={this.handleChange('date')}
			value={this.state.date}><DatePick/></div>

      </div>

			<p>
      <button onClick={() => this.addNewTransaction()} className="enter_new">Enter</button>
			</p>

        </form>  
        
        </TrackerFormStyles>
    
    );
  }
}

export default TrackerForm;
