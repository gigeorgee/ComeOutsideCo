import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MapPin, Users, Heart, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageContainer = styled.div`
  overflow: hidden;
`;

const HeroSection = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

const ParallaxBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 0 2rem;
  margin-top: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #69c280;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: 8rem 2rem;
  background: black;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StoryImage = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(105, 194, 128, 0.2), rgba(0,0,0,0.4));
  }
`;

const StoryContent = styled(motion.div)`
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #69c280;
  margin-bottom: 1.5rem;
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 2rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(105, 194, 128, 0.1);
`;

const QuoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
`;

const QuoteAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  h4 {
    color: #69c280;
    margin-bottom: 0.25rem;
  }

  p {
    color: #e0e0e0;
    font-size: 0.9rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  color: white;

  h3 {
    font-size: 3rem;
    color: #69c280;
    margin-bottom: 0.5rem;
  }

  p {
    color: #e0e0e0;
    font-size: 1.1rem;
  }
`;

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <HeroSection>
          <ParallaxBg>
            <img 
              src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80" 
              alt="Group running together"
            />
          </ParallaxBg>
          <HeroContent
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>Our Story</Title>
            <Subtitle>
              Building a community that goes beyond running, inspiring individuals to embrace 
              challenges and discover their potential together.
            </Subtitle>
          </HeroContent>
        </HeroSection>

        <Section>
          <ContentWrapper>
            <StorySection>
              <StoryImage
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80" 
                  alt="Running community"
                />
              </StoryImage>
              <StoryContent
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle>Where We Started</SectionTitle>
                <StoryText>
                  Come Outside began with a simple idea: creating a space where runners of all levels 
                  could come together, support each other, and push their limits. Based in the heart 
                  of Roundhay, we've grown from a small group of enthusiasts to a thriving community 
                  of runners, walkers, and adventurers.
                </StoryText>
                <StoryText>
                  Meeting at the iconic Oakwood Clock, our community has become a beacon for those 
                  seeking not just physical activity, but genuine connections and lasting friendships.
                </StoryText>
              </StoryContent>
            </StorySection>

            <Stats>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3>500+</h3>
                <p>Community Members</p>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>150+</h3>
                <p>Weekly Participants</p>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3>3</h3>
                <p>Weekly Events</p>
              </StatItem>
            </Stats>

            <TestimonialsGrid>
              <TestimonialCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <QuoteText>
                  "Come Outside changed my perspective on running. It's not just about the exercise - 
                  it's about the amazing people you meet and the community you become part of."
                </QuoteText>
                <QuoteAuthor>
                  <AuthorImage>
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" 
                      alt="Sarah"
                    />
                  </AuthorImage>
                  <AuthorInfo>
                    <h4>Sarah Johnson</h4>
                    <p>Member since 2022</p>
                  </AuthorInfo>
                </QuoteAuthor>
              </TestimonialCard>

              <TestimonialCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <QuoteText>
                  "From barely being able to run 1K to completing my first half marathon - the support 
                  from this community has been incredible. They believe in you even when you don't 
                  believe in yourself."
                </QuoteText>
                <QuoteAuthor>
                  <AuthorImage>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                      alt="Michael"
                    />
                  </AuthorImage>
                  <AuthorInfo>
                    <h4>Michael Chen</h4>
                    <p>Member since 2023</p>
                  </AuthorInfo>
                </QuoteAuthor>
              </TestimonialCard>

              <TestimonialCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <QuoteText>
                  "The weekend runs have become the highlight of my week. The positive energy and 
                  encouragement from everyone make every session special."
                </QuoteText>
                <QuoteAuthor>
                  <AuthorImage>
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" 
                      alt="Emma"
                    />
                  </AuthorImage>
                  <AuthorInfo>
                    <h4>Emma Thompson</h4>
                    <p>Member since 2023</p>
                  </AuthorInfo>
                </QuoteAuthor>
              </TestimonialCard>
            </TestimonialsGrid>
          </ContentWrapper>
        </Section>
      </PageContainer>
      <Footer />
    </>
  );
};

export default AboutUs; 