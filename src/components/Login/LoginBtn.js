import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.div`
div {
background: linear-gradient(to right, #03effe, #026be2);
color: #fff;
position: relative;
text-align: center;
font-family: sans-serif;
height: 40px;
width: 80px;
margin: 0 40px;
padding: 10px 5px;
cursor: pointer;
font-size: 16px;
border-radius: 50px;
overflow: hidden;
}

.btn1 {
background: linear-gradient(to right, #03effe, #026be2);
}

/*
.btn2 {
  background: linear-gradient(to right, #fe03b4, #ee0202);
}
*/

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
  transition: 0.7s;
  transform: rotate(-20deg) translateX(-60px);
}

div:hover:before {
  transform: rotate(-20deg) translate(140px, 70px);
}
`;

function LoginBtn() {
    return (
      
            <ButtonStyles>
            <div class="btn1">Sign In</div>
            </ButtonStyles>

    )
}

export default LoginBtn;
