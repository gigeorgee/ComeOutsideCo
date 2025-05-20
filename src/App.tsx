import React, { useState, Suspense, lazy } from 'react';
import { ArrowRight, CalendarPlus, MapPin, Clock } from 'lucide-react';
import { HashRouter, Routes as RouterRoutes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventWeather from './components/EventWeather';
import TestimonialCarousel from './components/TestimonialCarousel';

// Import images
import fiveKImage from './assets/images/5k-run.jpg';
import threeKImage from './assets/images/3k-run.jpg';
import walkImage from './assets/images/3k-walk.jpg';
import hikeImage from './assets/images/adventure-hike.jpg';
import groupRunningImage from './assets/images/group-running.jpg';
import fruitImage from './assets/images/Fruit.jpg';

// Lazy loaded components
const WaiverPage = lazy(() => import('./pages/WaiverPage'));
const SocialLinksPopup = lazy(() => import('./components/SocialLinksPopup'));

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Section = styled(motion.section)``;

const EventCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 6rem;
  }
`;

const StoryImage = styled(motion.div)`
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const StoryContent = styled(motion.div)`
  color: white;
`;

// Event type interface
interface EventType {
  title: string;
  location: string;
  time: string;
  description: string;
  image: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
} as const;

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
} as const;

// Animation variants for page elements

const HomePage = () => {
  const navigate = useNavigate();
  const [isSocialPopupOpen, setIsSocialPopupOpen] = useState(false);

  // Helper function to add event to calendar
  const addToCalendar = (event: EventType) => {
    // Check if it's a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Create calendar event details
      const title = `Come Outside: ${event.title}`;
      const location = event.location;
      const details = `${event.description} - Join Come Outside for this event!`;

      // For recurring events, we'll just set it for next Saturday at the specified time
      const date = new Date();
      // Set to next Saturday
      date.setDate(date.getDate() + (6 - date.getDay() + 7) % 7);

      // Parse time (assuming format like "Saturday @ 8:45am")
      let hours = 8;
      let minutes = 45;
      if (event.time.includes("8:45am")) {
        hours = 8;
        minutes = 45;
      }

      date.setHours(hours, minutes, 0, 0);

      // Format dates for calendar
      const startDate = date.toISOString().replace(/-|:|\.\d+/g, '');
      date.setHours(date.getHours() + 1); // Assume 1 hour event
      const endDate = date.toISOString().replace(/-|:|\.\d+/g, '');

      // Create calendar URL (Google Calendar format)
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sprop=&sprop=name:`;

      // Open calendar link
      window.open(calendarUrl, '_blank');
    } else {
      // On desktop, show social popup instead
      setIsSocialPopupOpen(true);
    }
  };

  const events: EventType[] = [
    {
      title: "5K Run",
      location: "Oakwood Clock, Roundhay",
      time: "Saturday @ 8:45am",
      description: "Challenge yourself with our energetic 5K run. Perfect for intermediate runners looking to push their limits while enjoying the scenic route.",
      image: fiveKImage
    },
    {
      title: "3K Run",
      location: "Oakwood Clock, Roundhay",
      time: "Saturday @ 8:45am",
      description: "A shorter distance perfect for beginners or those looking for a quick, energetic start to their weekend.",
      image: threeKImage
    },
    {
      title: "3K Walk",
      location: "Oakwood Clock, Roundhay",
      time: "Saturday @ 8:45am",
      description: "Join our walking group for a social, low-impact exercise session. All fitness levels welcome!",
      image: walkImage
    },
    {
      title: "Adventure Hike",
      location: "TBC check Socials",
      time: "Every 6 weeks",
      description: "Experience nature with our special hiking events. Follow our social channels for upcoming locations and dates.",
      image: hikeImage
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Section className="relative min-h-[75vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={groupRunningImage}
            alt="Group of runners from Come Outside community"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Run Together.
            <br />
            <span className="text-primary">Explore More.</span>
            <br />
            Come Outside!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join our vibrant community of runners exploring the city together.
            Every pace, every face, every race.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn btn-primary flex items-center justify-center"
              onClick={() => setIsSocialPopupOpen(true)}
              aria-label="Join our next run and connect with our social media"
            >
              Join Next Run <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </button>
            <button
              className="btn btn-outline"
              onClick={() => navigate('/waiver')}
              aria-label="Sign waiver form to join our events"
            >
              Sign Waiver
            </button>
          </div>
        </div>
      </Section>

      {/* Events Section */}
      <Section
        className="py-20 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Weekly Events
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <EventCard className="group hover:ring-2 hover:ring-primary transition-all">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={`Come Outside ${event.title} event at ${event.location}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    {event.title !== "Adventure Hike" && (
                      <EventWeather location={event.location} />
                    )}
                  </div>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-3 text-primary" />
                      <p>{event.location}</p>
                    </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-3 text-primary" />
                      <p>{event.time}</p>
                    </div>
                    <p className="text-sm mt-4">{event.description}</p>
                  </div>
                    </div>
                    <button
                      className="btn btn-primary w-full mt-6 flex items-center justify-center"
                      onClick={() => addToCalendar(event)}
                      aria-label={`Add ${event.title} to your calendar`}
                    >
                      Join Event
                      <CalendarPlus className="ml-2 w-5 h-5" aria-hidden="true" />
                    </button>
                </div>
                </EventCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Story Section */}
      <Section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <StorySection>
            <StoryImage
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={fruitImage}
                alt="Healthy fruit representing our community's focus on wellbeing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </StoryImage>
            <StoryContent
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Where We Started
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Come Outside began with a simple idea: creating a space where runners of all levels
                  could come together, support each other, and push their limits. Based in the heart
                  of Roundhay, we've grown from a small group of enthusiasts to a thriving community
                  of runners, walkers, and adventurers.
                </p>
                <p>
                  Meeting at the iconic Oakwood Clock, our community has become a beacon for those
                  seeking not just physical activity, but genuine connections and lasting friendships.
                </p>
              </div>
            </StoryContent>
          </StorySection>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "200+", text: "Community Members" },
              { number: "80+", text: "Weekly Participants" },
              { number: "3", text: "Weekly Events" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-300">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="mt-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Stories
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <TestimonialCarousel
                testimonials={[
                  {
                    quote: "Come Outside changed my perspective on running. It's not just about the exercise - it's about the amazing people you meet and the community you become part of.",
                    name: "Sarah Johnson",
                    since: "2022",
                    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
                  },
                  {
                    quote: "From barely being able to run 1K to completing my first half marathon - the support from this community has been incredible. They believe in you even when you don't believe in yourself.",
                    name: "Michael Chen",
                    since: "2023",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  },
                  {
                    quote: "The weekend runs have become the highlight of my week. The positive energy and encouragement from everyone make every session special.",
                    name: "Emma Thompson",
                    since: "2023",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                  },
                  {
                    quote: "I never thought I'd enjoy running, but Come Outside made it fun and accessible. The community is so welcoming and supportive.",
                    name: "David Wilson",
                    since: "2022",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                  },
                  {
                    quote: "As someone who was intimidated by running groups, I can't believe how quickly I felt at home here. No judgment, just encouragement.",
                    name: "Priya Patel",
                    since: "2023",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  },
                  {
                    quote: "I've tried many running clubs, but Come Outside has the perfect balance of challenge and support. The community aspect makes all the difference.",
                    name: "James Rodriguez",
                    since: "2022",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                  },
                  {
                    quote: "After moving to Leeds, I was looking for a way to meet people and stay active. Come Outside has given me both a fitness routine and lifelong friends.",
                    name: "Olivia Bennett",
                    since: "2023",
                    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80"
                  },
                  {
                    quote: "The inclusive atmosphere at Come Outside is what keeps me coming back. Whether you're walking or running, everyone is celebrated.",
                    name: "Thomas Wright",
                    since: "2022",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  },
                  {
                    quote: "I started with the 3K walk and now I'm training for a half marathon! The gradual progression and constant encouragement made this possible.",
                    name: "Sophia Kim",
                    since: "2021",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </Section>

      <Footer />

      {/* Social Links Popup */}
      <Suspense fallback={null}>
        <SocialLinksPopup
          isOpen={isSocialPopupOpen}
          onClose={() => setIsSocialPopupOpen(false)}
        />
      </Suspense>
    </>
  );
};

// Loading fallback component
const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #000;
  color: #69c280;
  font-size: 1.5rem;
`;

const App = () => {
  return (
    <HashRouter>
      <AppContainer>
        <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
          <RouterRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/waiver" element={<WaiverPage />} />
            <Route path="*" element={<HomePage />} />
          </RouterRoutes>
        </Suspense>
      </AppContainer>
    </HashRouter>
  );
};

export default App;