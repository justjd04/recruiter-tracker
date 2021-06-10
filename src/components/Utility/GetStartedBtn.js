import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyles = styled.div`
div {
background: linear-gradient(to right, #03effe, #026be2);
color: #fff;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
font-family: sans-serif;
height: 60px;
width: 280px;
margin: 20px;
padding: 15px;
cursor: pointer;
font-size: 16px;
border-radius: 50px;
overflow: hidden;
}

/*.btn1 {
background: linear-gradient(to right, #03effe, #026be2);
}
*/


.btn2 {
  background: linear-gradient(to right, #fe03b4, #ee0202);
}


div:before {
  content: "";
  position: absolute;
  height: 100px;
  width: 20px;
  background: #f3f3f3;
  box-shadow: 0 0 10px #fff;
  filter: blur(1px);
  opacity: 0.9;
  top: -30px;
  transition: 0.5s;
  transform: rotate(-20deg) translateX(-60px);
}

div:hover:before {
  transform: rotate(-20deg) translate(300px, 150px);
}
`;

function GetStartedBtn() {
    return (
      
            <ButtonStyles>
                <Link to='/sign-in' activeStyle>
            <div class="btn2">SIGN IN TO GET STARTED</div>
                </Link>
            </ButtonStyles>

    )
}

export default GetStartedBtn;