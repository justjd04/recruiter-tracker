import React from 'react';
import Register from '../components/Forms/Register';

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
      <Register/>
    </div>
  );
};

export default SignUp;