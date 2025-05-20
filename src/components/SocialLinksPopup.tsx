import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Facebook, Instagram } from 'lucide-react';

interface SocialLinksPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 500px;
  width: calc(100% - 2rem);
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(105, 194, 128, 0.2);
  max-height: 90vh;
  overflow-y: auto;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #69c280;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ModalText = styled.p`
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.6;
`;

const SocialLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
  min-height: 110px; /* Ensure minimum touch target size */
  touch-action: manipulation; /* Optimize for touch */

  &:hover, &:active {
    background: rgba(105, 194, 128, 0.2);
    transform: translateY(-3px);
  }

  .icon-container {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #69c280;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }

  span {
    font-size: 0.9rem;
    text-align: center;
  }
`;

// Custom icons for platforms that aren't in Lucide
const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StravaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066l-2.084 4.116z" fill="currentColor"/>
    <path d="M10.232 13.828l3.066 6.176 3.066-6.176h-6.132z" fill="currentColor"/>
    <path d="M7.42 0L0 14.841h3.6l3.82-7.607 3.764 7.607h3.551L7.42 0z" fill="currentColor"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 10.223-8.752 6.33 6.33 0 001.696-1.94 6.337 6.337 0 005.372 2.92V6.686a8.182 8.182 0 004.773 1.526V4.81a4.772 4.772 0 01-2.363-.622z" fill="currentColor"/>
  </svg>
);

const SocialLinksPopup: React.FC<SocialLinksPopupProps> = ({ isOpen, onClose }) => {
  const socialLinks = [
    { name: 'Telegram', icon: <TelegramIcon />, url: 'https://t.me/+LFlBoQ2sF-AzYmQ0' },
    { name: 'Strava', icon: <StravaIcon />, url: 'https://www.strava.com/clubs/1240691' },
    { name: 'Facebook', icon: <Facebook size={24} />, url: 'https://www.facebook.com/comeoutsideco' },
    { name: 'TikTok', icon: <TikTokIcon />, url: 'https://www.tiktok.com/@comeoutsideco' },
    { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://www.instagram.com/comeoutsideco/' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <CloseButton onClick={onClose}>
              <X size={24} />
            </CloseButton>

            <ModalTitle>Join Our Community</ModalTitle>
            <ModalText>
              Connect with us on social media to stay updated on all our events and join our vibrant community!
            </ModalText>

            <SocialLinksGrid>
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-container">
                    {link.icon}
                  </div>
                  <span>{link.name}</span>
                </SocialLink>
              ))}
            </SocialLinksGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default SocialLinksPopup;
