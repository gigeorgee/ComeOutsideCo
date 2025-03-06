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
        <div className="space-y-4 mt-6">
          <p className="text-gray-300">Follow us on social media:</p>
          <div className="flex flex-col space-y-2">
            <a href="https://t.me/+LFlBoQ2sF-AzYmQ0" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Telegram</a>
            <a href="https://www.strava.com/clubs/1240691" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Strava</a>
            <a href="https://www.facebook.com/comeoutsideco" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Facebook</a>
            <a href="https://www.tiktok.com/@comeoutsideco" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">TikTok</a>
            <a href="https://www.instagram.com/comeoutsideco/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Instagram</a>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default WaiverPage; 