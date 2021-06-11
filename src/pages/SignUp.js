import React from 'react';
import Register from '../components/Forms/Register';
import styled from 'styled-components';

const MainBlock = styled.div`
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    background: white;
    background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
    padding: 20px;
    width: 100%;
    max-width: 350px;
    margin: 100px auto;
    display: table;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); 
}
`;

const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <MainBlock><Register/></MainBlock>
    </div>
  );
};

export default SignUp;