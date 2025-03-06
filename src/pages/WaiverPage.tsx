import React from 'react';
import styled from 'styled-components';
import WaiverForm from '../components/WaiverForm';
import Navbar from '../components/Navbar';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 0 1rem;
`;

const WaiverPage = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <WaiverForm />
      </PageContainer>
    </>
  );
};

export default WaiverPage; 