import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPin, Clock } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 40px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #69c280;
  margin-bottom: 2rem;
  text-align: center;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const EventCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  padding: 2rem;
  color: white;
`;

const EventTitle = styled.h2`
  font-size: 1.5rem;
  color: #69c280;
  margin-bottom: 1rem;
`;

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
`;

const Calendar = () => {
  const events = [
    {
      title: "5K Run",
      date: "Every Saturday",
      time: "8:45 AM",
      location: "Oakwood Clock, Roundhay",
      description: "Join us for our weekly 5K run through scenic Roundhay Park."
    },
    {
      title: "3K Run",
      date: "Every Saturday",
      time: "8:45 AM",
      location: "Oakwood Clock, Roundhay",
      description: "Perfect for beginners or those looking for a shorter distance."
    },
    {
      title: "3K Walk",
      date: "Every Saturday",
      time: "8:45 AM",
      location: "Oakwood Clock, Roundhay",
      description: "A social walking group for all fitness levels."
    }
  ];

  return (
    <PageContainer>
      <Title>Upcoming Events</Title>
      <EventsGrid>
        {events.map((event, index) => (
          <EventCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <EventTitle>{event.title}</EventTitle>
            <EventDetail>
              <CalendarIcon size={20} color="#69c280" />
              {event.date}
            </EventDetail>
            <EventDetail>
              <Clock size={20} color="#69c280" />
              {event.time}
            </EventDetail>
            <EventDetail>
              <MapPin size={20} color="#69c280" />
              {event.location}
            </EventDetail>
            <p style={{ marginTop: '1rem', color: '#e0e0e0' }}>
              {event.description}
            </p>
          </EventCard>
        ))}
      </EventsGrid>
    </PageContainer>
  );
};

export default Calendar; 