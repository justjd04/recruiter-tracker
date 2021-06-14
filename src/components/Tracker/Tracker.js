import React, { Component } from 'react';
import fire from '../../config/Fire';
import Transaction from './Transaction';
import styled from 'styled-components';
import { GiBattleGear } from "react-icons/gi";
import ModalApp from '../Modal/ModalApp';


const HiUserStyles = styled.div`
    .hi_user {
        position: absolute;
        top: 85px;
        left: 10px;
        color: #800080;
        font-size: 16px;
        text-align: left;
        display: flex;
        padding: 2px;
        
    }
        #user_icon {
            color: #ff8000;
            font-size: 18px;
            top: 52px;
        }
        `;

const BlockStyles = styled.div`
    position: absolute;
    top: 330px;
    width: 100%;

.tracker_block {
    position: absolute;
    top: -290px;
    width: 100%;
}
`;

class Tracker extends Component {

    state = {
        transactions: [],

        name: '',
        company: '',
        position: '',
        status: '',
        date: '',
        link: '', 
        currentUID: fire.auth().currentUser.uid
    }

    // logout function
    logout = () => {
        fire.auth().signOut();
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

    render(){
        var currentUser = fire.auth().currentUser;

        return(
            <>
            <HiUserStyles>
                <div className="welcome_user">
                
                    <div className="hi_user"><GiBattleGear id="user_icon"/><span id="user_display">{currentUser.displayName}</span></div>
                
                </div>
                </HiUserStyles>
            
            <BlockStyles>
            <div className="tracker_block">

                <div className="latestTransactions">

                        {
                            Object.keys(this.state.transactions).map((id) => (
                                <Transaction key={id}
                                    name={this.state.transactions[id].name}
                                    company={this.state.transactions[id].company}
                                    position={this.state.transactions[id].position}
                                    status={this.state.transactions[id].status}
                                    date={this.state.transactions[id].date}
                                    link={this.state.transactions[id].link}
                        
                                />
                                
                            ))
                            
                        }
                    
                </div>
                
            </div>
            <ModalApp/>
            </BlockStyles>
            </>
        );
    }
}

export default Tracker;

