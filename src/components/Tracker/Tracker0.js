import React, { Component } from 'react';
import fire from '../../config/Fire';
import Transaction from './Transaction';
import styled from 'styled-components';
import { GiBattleGear } from "react-icons/gi";
//import ModalApp from '../Modal/ModalApp';


const HiUserStyles = styled.div`
    .hi_user {
        position: relative;
        top: 40px;
        color: #0000a0;
        font-size: 18px;
        margin: 5px 10px 10px 10px;
    }
        #user_icon {
            color: #990000;
            font-size: 27px;
            top: 52px;
        }
        .exit {
            position: absolute;
            right: 40px;
            top: 60px;
        }
        `;
const BlockStyles = styled.div`
    position: relative;
    top: -40px;
    width: 100%;
`;

class Tracker0 extends Component {

    /*
    state = {
        transactions: [],

        name: '',
        company: '',
        position: '',
        link: '',
        currentUID: fire.auth().currentUser.uid
    }*/

    // logout function
    /*logout = () => {
        fire.auth().signOut();
    }
    */

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value !=="0" ? e.target.value : ""
        });
    }
    



    // add transaction
    addNewTransaction = () => {
        const {name, company, position, link, currentUID} = this.state;
        

        // validation
        if(name && company && position && link){

            const BackUpState = this.state.transactions;
            BackUpState.push({
                id: BackUpState.length + 1,
                name: name,
                company: company,
                position: position,
                link: link,
                user_id: currentUID
            });
            
            /*
            fire.database().ref('Transactions/' + currentUID).push({
                id: BackUpState.length,
                name: name,
                company: company,
                position: position,
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
                    link: ''
                })
            }).catch((error)=>{
                //error callback
                console.log('error ' , error)
            });
            */

        }
    }

    /*componentWillMount(){
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
                    user_id: childSnapshot.val().user_id
                });
                // console.log(childSnapshot.val().name);
            });
            this.setState({
                transactions: BackUpState,
            });
        });
    }
    */

    render(){
        //var currentUser = fire.auth().currentUser;

        return(
            <BlockStyles>
            <div className="trackerBlock">
                {/*
                <HiUserStyles>
                <div className="welcome_user">
                
                    <div className="hi_user"><GiBattleGear id="user_icon"/><span id="user_display">{currentUser.displayName}</span></div>
                
                    <button className="exit" onClick={this.logout}>Exit</button>
                </div>
        </HiUserStyles>
        */}
                

                {/*<ModalApp/>*/}

               
                <div className="latestTransactions">

                        {
                            Object.keys(this.state.transactions).map((id) => (
                                <Transaction key={id}
                                    name={this.state.transactions[id].name}
                                    company={this.state.transactions[id].company}
                                    position={this.state.transactions[id].position}
                                    link={this.state.transactions[id].link}
                        
                                />
                                
                            ))
                            
                        }
                    
                </div>
                
            </div>
            </BlockStyles>
        );
    }
}

export default Tracker0;