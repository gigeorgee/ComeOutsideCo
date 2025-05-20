import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  since: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
`;



const TestimonialSlide = styled(motion.div)`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(105, 194, 128, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Quote = styled.p`
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;

  &::before {
    content: '"';
    color: #69c280;
    font-size: 1.5rem;
    font-weight: bold;
  }

  &::after {
    content: '"';
    color: #69c280;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #69c280;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorDetails = styled.div`
  h4 {
    color: #69c280;
    font-size: 1.1rem;
    margin: 0 0 0.25rem 0;
  }

  p {
    color: #888;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const CarouselButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position === 'left' ? 'left: -10px;' : 'right: -10px;'}
  background: rgba(105, 194, 128, 0.8);
  color: black;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    ${props => props.position === 'left' ? 'left: -20px;' : 'right: -20px;'}
  }

  &:hover {
    background: #69c280;
    transform: translateY(-50%) scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(105, 194, 128, 0.5);
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#69c280' : 'rgba(105, 194, 128, 0.3)'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.active ? '#69c280' : 'rgba(105, 194, 128, 0.5)'};
  }
`;

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [page, setPage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Group testimonials into sets of 3
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  // Calculate total pages
  const totalPages = groupedTestimonials.length;

  // Handle navigation
  const navigate = (direction: number) => {
    setAutoplay(false); // Pause autoplay when user interacts
    const newPage = (page + direction + totalPages) % totalPages;
    setPage(newPage);
  };

  // Go to specific page
  const goToPage = (newPage: number) => {
    setAutoplay(false); // Pause autoplay when user interacts
    setPage(newPage);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || totalPages <= 1) return;

    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, totalPages]);

  return (
    <div>
      <CarouselContainer>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            style={{
              display: 'flex',
              width: `${totalPages * 100}%`
            }}
            animate={{
              x: `calc(-${page * (100 / totalPages)}%)`
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {groupedTestimonials.map((group, groupIndex) => (
              <div
                key={groupIndex}
                style={{
                  display: 'flex',
                  width: `${100 / totalPages}%`,
                  gap: '20px',
                  padding: '0 10px'
                }}
              >
                {group.map((testimonial, index) => (
                  <TestimonialSlide
                    key={index}
                    style={{
                      flex: 1,
                      marginRight: index < group.length - 1 ? '20px' : '0'
                    }}
                  >
                    <Quote>{testimonial.quote}</Quote>
                    <AuthorInfo>
                      <AuthorImage>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                        />
                      </AuthorImage>
                      <AuthorDetails>
                        <h4>{testimonial.name}</h4>
                        <p>Member since {testimonial.since}</p>
                      </AuthorDetails>
                    </AuthorInfo>
                  </TestimonialSlide>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {totalPages > 1 && (
          <>
            <CarouselButton
              position="left"
              onClick={() => navigate(-1)}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </CarouselButton>

            <CarouselButton
              position="right"
              onClick={() => navigate(1)}
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </CarouselButton>
          </>
        )}
      </CarouselContainer>

      {totalPages > 1 && (
        <IndicatorsContainer>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Indicator
              key={index}
              active={index === page}
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </IndicatorsContainer>
      )}
    </div>
  );
};

export default TestimonialCarousel;
