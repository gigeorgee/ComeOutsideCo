import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Facebook, Instagram, MapPin, Send } from 'lucide-react';

const FormContainer = styled(motion.div)`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #e0e0e0;
`;

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  width: 100%;
  color: #000000;

  &:focus {
    outline: 2px solid #69c280;
    border-color: transparent;
  }
`;

const TermsContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  max-height: 500px;
  overflow-y: auto;
  font-size: 1rem;
  line-height: 1.8;

  h3 {
    color: #69c280;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: #69c280;
      position: absolute;
      left: 0;
    }
  }

  p.note {
    margin-top: 2rem;
    padding: 1rem;
    background: rgba(255, 193, 7, 0.1);
    border-radius: 6px;
    color: #ffc107;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.95rem;
  color: #e0e0e0;
`;

const RadioInput = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #69c280;
  cursor: pointer;
`;

const CheckboxLabel = styled(RadioLabel)`
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: #69c280;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5ab171;
  }

  &:disabled {
    background-color: #4a4a4a;
    cursor: not-allowed;
  }
`;

// Add new styled components for success/error messages
const Message = styled.div<{ type: 'success' | 'error' }>`
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  background-color: ${props => props.type === 'success' ? 'rgba(105, 194, 128, 0.1)' : 'rgba(220, 38, 38, 0.1)'};
  color: ${props => props.type === 'success' ? '#69c280' : '#dc2626'};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

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
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  position: relative;
  color: white;
  border: 1px solid rgba(105, 194, 128, 0.2);
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
  transition: color 0.2s ease;

  &:hover {
    color: #69c280;
  }
`;

const ModalTitle = styled.h2`
  color: #69c280;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #e0e0e0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: white;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  position: relative;

  &:hover {
    color: #69c280;
    background: rgba(105, 194, 128, 0.1);
    transform: translateY(-2px);
  }

  &:before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
  }

  &:hover:before {
    opacity: 1;
    visibility: visible;
  }
`;

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <CloseButton onClick={onClose}>
              <X size={24} />
            </CloseButton>
            
            <ModalTitle>Thank You for Joining Come Outside! 🎉</ModalTitle>
            <ModalText>
              Your waiver has been successfully submitted. We're excited to have you join our community!
            </ModalText>
            
            <ModalText>
              Stay connected and never miss an event by following us on our social media channels:
            </ModalText>

            <SocialLinks>
              <SocialLink 
                href="https://facebook.com/comeoutside" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="Facebook"
              >
                <Facebook size={24} />
              </SocialLink>
              <SocialLink 
                href="https://instagram.com/comeoutside" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="Instagram"
              >
                <Instagram size={24} />
              </SocialLink>
              <SocialLink 
                href="https://strava.com/clubs/comeoutside" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="Strava"
              >
                <MapPin size={24} />
              </SocialLink>
              <SocialLink 
                href="https://t.me/comeoutside" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="Telegram"
              >
                <Send size={24} />
              </SocialLink>
            </SocialLinks>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

const WaiverForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contactNumber: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    acceptDisclaimer: false,
    mailingPreference: ''
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtmK8Tcln97rs03AvkZsWMP60UKtWa3sldRaZgeWh74B8ND-bH7ukPba7PF5QKUnDuDQ/exec';
      
      console.log('Submitting form data:', formData);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...formData
        })
      });

      console.log('Response received:', response);

      setSubmitStatus({
        type: 'success',
        message: 'Waiver submitted successfully!'
      });

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        address: '',
        contactNumber: '',
        emergencyContactName: '',
        emergencyContactNumber: '',
        acceptDisclaimer: false,
        mailingPreference: ''
      });

      // Show the success modal
      setIsModalOpen(true);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit waiver. Please try again or contact support. Error: ' + error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <FormContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Form onSubmit={handleSubmit}>
          {submitStatus && (
            <Message type={submitStatus.type}>
              {submitStatus.type === 'success' ? '✓' : '⚠'} {submitStatus.message}
            </Message>
          )}

          <TermsContainer>
            <h3>Terms and Conditions</h3>
            <ul>
              <li><strong>Voluntary Participation:</strong> I acknowledge that I am participating in Come Outside activities entirely at my own risk.</li>
              <li><strong>Assumption of Risk:</strong> I understand and accept that running and other activities conducted by Come Outside involve inherent risks, including but not limited to, injury, illness, loss, or damage to myself, third parties, or property.</li>
              <li><strong>Release of Liability:</strong> I agree that Come Outside, its leaders, volunteers, and affiliates shall not be liable for any injury, loss, or damage related to or arising from my participation in any Come Outside activity.</li>
              <li><strong>Health and Fitness:</strong> I confirm that I am in good health, physically fit, and unaware of any medical conditions that would prevent me from safely participating in any Come Outside event.</li>
              <li><strong>Disclosure of Health Conditions:</strong> I agree to disclose any health conditions that could affect my ability to participate safely in physical activities to the community leaders before participating in any event.</li>
              <li><strong>Personal Responsibility:</strong> I understand that it is my responsibility to manage my condition during the activity and take all necessary precautions.</li>
              <li><strong>Right to Refuse:</strong> I understand that Come Outside reserves the right to refuse participation if deemed necessary.</li>
              <li><strong>Property Loss:</strong> I accept that Come Outside is not responsible for any loss or damage to my personal property.</li>
              <li><strong>Age Declaration:</strong> I declare that I am 18 years of age or older and legally competent to sign this Waiver.</li>
              <li><strong>Image Rights:</strong> I grant Come Outside the right to use my image in photographs or videos taken during events.</li>
              <li><strong>Data Usage:</strong> I acknowledge that Come Outside may use my personal data in compliance with GDPR.</li>
            </ul>
            <p className="note"><strong>Note:</strong> For participants under 18, a parent or legal guardian must sign this waiver and accompany the participant during activities.</p>
          </TermsContainer>

          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
            <Input
              type="text"
              id="emergencyContactName"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="emergencyContactNumber">Emergency Contact Number</Label>
            <Input
              type="tel"
              id="emergencyContactNumber"
              name="emergencyContactNumber"
              value={formData.emergencyContactNumber}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <CheckboxLabel>
              <RadioInput
                type="checkbox"
                name="acceptDisclaimer"
                checked={formData.acceptDisclaimer}
                onChange={handleInputChange}
                required
              />
              I have read, understood, and accept all the terms and conditions above. I am proceeding with Come Outside events.
            </CheckboxLabel>
          </FormGroup>

          <FormGroup>
            <Label>Mailing List Consent</Label>
            <RadioGroup>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="mailingPreference"
                  value="opt-in"
                  checked={formData.mailingPreference === 'opt-in'}
                  onChange={handleInputChange}
                  required
                />
                Opting in - I would like to receive emails from Come Outside on future events.
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="mailingPreference"
                  value="opt-out"
                  checked={formData.mailingPreference === 'opt-out'}
                  onChange={handleInputChange}
                />
                Opting out - I prefer not to receive emails from Come Outside.
              </RadioLabel>
            </RadioGroup>
          </FormGroup>

          <SubmitButton 
            type="submit"
            disabled={!formData.acceptDisclaimer || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Waiver'}
          </SubmitButton>
        </Form>
      </FormContainer>
      
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default WaiverForm; 