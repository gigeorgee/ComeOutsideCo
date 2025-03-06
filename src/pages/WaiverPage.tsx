import React from 'react';
import styled from 'styled-components';
import WaiverForm from '../components/WaiverForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const WaiverPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <WaiverForm />
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default WaiverPage; 