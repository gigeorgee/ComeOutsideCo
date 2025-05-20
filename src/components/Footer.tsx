import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #69c280;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: #e0e0e0;
    margin-bottom: 0.5rem;
  }

  a {
    color: #e0e0e0;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #69c280;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    transition: color 0.2s ease;

    &:hover {
      color: #69c280;
    }
  }
`;

// Footer styled components

// SVG icons for social media
const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.032.259.019.839-.017 1.465z"/>
  </svg>
);

const StravaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.444 13.828h4.169"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.6 5.82s.51-.15 0 0-1.45.43-2.47.43v9.4a4.71 4.71 0 0 1-4.74 4.74 4.71 4.71 0 0 1-4.74-4.74 4.71 4.71 0 0 1 4.74-4.74c.42 0 .83.06 1.22.16v3.38c-.24-.09-.49-.15-.75-.15a2.09 2.09 0 0 0-2.09 2.09 2.09 2.09 0 0 0 2.09 2.09 2.09 2.09 0 0 0 2.09-2.09V2.61h3.12c.24 2.43 1.76 3.12 3.06 3.21z"/>
  </svg>
);

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>Come Outside</h3>
            <p>Join our vibrant community of runners exploring Leeds together.</p>
            <SocialLinks>
              <a href="https://t.me/+LFlBoQ2sF-AzYmQ0" target="_blank" rel="noopener noreferrer">
                <TelegramIcon />
              </a>
              <a href="https://www.strava.com/clubs/1240691" target="_blank" rel="noopener noreferrer">
                <StravaIcon />
              </a>
              <a href="https://www.facebook.com/comeoutsideco" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://www.tiktok.com/@comeoutsideco" target="_blank" rel="noopener noreferrer">
                <TikTokIcon />
              </a>
              <a href="https://www.instagram.com/comeoutsideco/" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/waiver">Sign Waiver</Link></p>
            <p><a href="https://www.strava.com/clubs/1240691" target="_blank" rel="noopener noreferrer">Events</a></p>
          </FooterSection>

          <FooterSection>
            <h3>Contact</h3>
            <p className="flex items-center gap-2">
              <MapPin size={18} />
              Oakwood Clock, Roundhay
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} />
              hello@comeoutside.run
            </p>
          </FooterSection>
        </FooterGrid>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;