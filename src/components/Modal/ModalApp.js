import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import { BsPlus } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display:flex;
  position: absolute;
  right: 80px;
  box-sizing: border-box;
  padding: 5px ;
  border-radius: 4px;
  border: none;
  background: #ee0077;
  color: #ffffff;
  font-size: 40px;
  font-weight: bolder;
  cursor: pointer;
`;

function ModalApp() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}><BsPlus/></Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
}

export default ModalApp;