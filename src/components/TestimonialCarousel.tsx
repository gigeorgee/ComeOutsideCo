import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  min-height: 350px; /* Fixed height to prevent layout shifts */

  @media (max-width: 768px) {
    min-height: 450px; /* Taller on mobile due to stacked content */
  }
`;



const TestimonialSlide = styled(motion.div)`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(105, 194, 128, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
  will-change: transform, opacity; /* Hint to browser for optimization */

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
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

const CarouselButton = styled.button<{ position: 'left' | 'right', disabled?: boolean }>`
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
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: ${props => props.disabled ? 0.6 : 1};

  @media (min-width: 768px) {
    ${props => props.position === 'left' ? 'left: -20px;' : 'right: -20px;'}
  }

  &:hover {
    background: #69c280;
    transform: translateY(-50%) ${props => !props.disabled && 'scale(1.05)'};
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

const Indicator = styled.button<{ active: boolean, disabled?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#69c280' : 'rgba(105, 194, 128, 0.3)'};
  border: none;
  padding: 0;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.disabled ? 0.6 : 1};

  &:hover {
    background: ${props => !props.disabled && (props.active ? '#69c280' : 'rgba(105, 194, 128, 0.5)')};
  }
`;

// Helper function for image preloading
// This is now handled directly in the useEffect

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [page, setPage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Memoize grouped testimonials to prevent recalculation on every render
  const groupedTestimonials = useMemo(() => {
    const groups = [];
    for (let i = 0; i < testimonials.length; i += 3) {
      groups.push(testimonials.slice(i, Math.min(i + 3, testimonials.length)));
    }
    return groups;
  }, [testimonials]);

  // Calculate total pages
  const totalPages = groupedTestimonials.length;

  // Handle navigation with useCallback to prevent recreation on each render
  const navigate = useCallback((direction: number) => {
    if (isAnimating) return;

    setAutoplay(false); // Pause autoplay when user interacts
    setIsAnimating(true);
    const newPage = (page + direction + totalPages) % totalPages;
    setPage(newPage);

    // Reset animating state after animation completes
    setTimeout(() => setIsAnimating(false), 500);
  }, [page, totalPages, isAnimating]);

  // Go to specific page
  const goToPage = useCallback((newPage: number) => {
    if (isAnimating || page === newPage) return;

    setAutoplay(false); // Pause autoplay when user interacts
    setIsAnimating(true);
    setPage(newPage);

    // Reset animating state after animation completes
    setTimeout(() => setIsAnimating(false), 500);
  }, [page, isAnimating]);

  // Optimized autoplay functionality
  useEffect(() => {
    if (!autoplay || totalPages <= 1) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setPage((prevPage) => (prevPage + 1) % totalPages);

        // Reset animating state after animation completes
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, totalPages, isAnimating]);

  // We'll use this in future optimizations if needed
  // const visibleGroupIndices = useMemo(() => {
  //   const indices = [page];
  //   if (page > 0) indices.push(page - 1);
  //   if (page < totalPages - 1) indices.push(page + 1);
  //   return indices;
  // }, [page, totalPages]);

  // Preload images in the background but don't block rendering
  useEffect(() => {
    // Simple image preloading
    testimonials.forEach(testimonial => {
      const img = new Image();
      img.src = testimonial.image;
    });
  }, [testimonials]);

  return (
    <div>
      <CarouselContainer>
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '0 10px'
          }}>
              {groupedTestimonials[page].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  style={{
                    flex: '1 1 calc(33.333% - 20px)',
                    minWidth: '250px',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <TestimonialSlide>
                    <Quote>{testimonial.quote}</Quote>
                    <AuthorInfo>
                      <AuthorImage>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                          width="60"
                          height="60"
                        />
                      </AuthorImage>
                      <AuthorDetails>
                        <h4>{testimonial.name}</h4>
                        <p>Member since {testimonial.since}</p>
                      </AuthorDetails>
                    </AuthorInfo>
                  </TestimonialSlide>
                </motion.div>
              ))}
            </div>
          </div>

        {totalPages > 1 && (
          <>
            <CarouselButton
              position="left"
              onClick={() => !isAnimating && navigate(-1)}
              aria-label="Previous testimonials"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </CarouselButton>

            <CarouselButton
              position="right"
              onClick={() => !isAnimating && navigate(1)}
              aria-label="Next testimonials"
              disabled={isAnimating}
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
              disabled={isAnimating}
            />
          ))}
        </IndicatorsContainer>
      )}
    </div>
  );
};

export default TestimonialCarousel;
