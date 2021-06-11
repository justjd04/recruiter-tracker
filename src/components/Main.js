import React, { Component } from 'react';
import fire from '../config/Fire';
import Login from './Forms/Login';
import Register from './Forms/Register';
import Tracker from './Tracker/Tracker';
import Spinner from '../assets/loader.gif';
import GetStartedBtn from './Utility/GetStartedBtn';

export default class Main extends Component {

    state = {
        user: 1,
        loading: false,

    }

    componentDidMount() {
      this.authListener();
    }

    authListener(){
      fire.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({user});
        }else{
          this.setState({user:null});
        }
      });
    }


    render() {

      if(this.state.user === 1) {
        return (
          <div className="mainBlock">
            <div className="Spinner">
              <img src={Spinner} alt="Spinner" className="ImgSpinner" />
            </div>
          </div>
        )
      }

        return(
          <>
          {!this.state.user ?
            (

              <GetStartedBtn/>


            ) : (<Tracker />)
          }  
            
          </>
        );
    }
}