import React from 'react';
import Login from '../components/Forms/Login';

const SignIn = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <Login/>
    </div>
  );
};

export default SignIn;
