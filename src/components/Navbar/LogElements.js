import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/Fire';
import styled from 'styled-components';

const ExitStyles = styled.span`
  color: #400080;
  :hover {
    cursor: pointer;
  }
`;


class LogElements extends Component {

  state = {
    user: 1,
    loading: false,

}

componentDidMount() {
  this.authListener();
}

// logout function
logout = () => {
  fire.auth().signOut();
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

render(){


  return (

    <div>       
        {!this.state.user ?
            (
        <> 

         <li>
          <Link to='/sign-in'>
          <span>Sign in</span>
          </Link>
          </li>

          <li>
          <Link to='/sign-up'>
          <span>Sign Up</span>
          </Link>
          </li>
  
        </>

        ) : (

        <li>
        <ExitStyles><span className="exit" onClick={this.logout}>Log out</span></ExitStyles>
        </li>
        )
        } 

        </div>
  );
}
}

export default LogElements;