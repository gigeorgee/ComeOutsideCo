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

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #888;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>Come Outside</h3>
            <p>Join our vibrant community of runners exploring Leeds together.</p>
            <SocialLinks>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/waiver">Sign Waiver</Link></p>
            <p><Link to="/calendar">Event Calendar</Link></p>
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