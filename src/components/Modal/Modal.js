import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import TrackerForm from '../Tracker/TrackerForm';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 150px;
  display: flex;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 250px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: absolute;
  top: -250px;
  z-index: 100;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  div {
    color: #0000ff;
    font-size: 25px;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const [tracker, setTracker] = useState([]);

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          
            <ModalWrapper showModal={showModal}>
              
              <ModalContent>
                <div>Candidate Information</div>
                <TrackerForm tracker={tracker} setTracker={setTracker} />
              
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>

        </Background>
      ) : null}
    </>
  );
};