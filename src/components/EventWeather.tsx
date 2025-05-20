import React from 'react';
import styled from 'styled-components';
import { Cloud, Sun } from 'lucide-react';

interface EventWeatherProps {
  location: string;
}

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(105, 194, 128, 0.15);
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  width: fit-content;
  margin-left: auto;
`;

const IconContainer = styled.div`
  color: #69c280;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Temperature = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #e0e0e0;
`;

const EventWeather: React.FC<EventWeatherProps> = ({ location }) => {
  // Simulate different weather conditions based on location
  // In a real app, this would come from an API
  const getWeatherInfo = (loc: string) => {
    // For demonstration, we'll use a fixed weather for each location
    // This ensures all events at the same location have the same weather

    // Default weather
    let weather = { condition: 'Sunny', icon: <Sun size={16} />, temperature: 18 };

    // Set specific weather based on location
    if (loc.includes('Oakwood Clock')) {
      // All Oakwood Clock events will have the same weather
      weather = { condition: 'Sunny', icon: <Sun size={16} />, temperature: 18 };
    } else if (loc.includes('TBC')) {
      weather = { condition: 'Cloudy', icon: <Cloud size={16} />, temperature: 16 };
    }

    return weather;
  };

  const weather = getWeatherInfo(location);

  return (
    <WeatherContainer>
      <IconContainer>{weather.icon}</IconContainer>
      <Temperature>{weather.temperature}°C</Temperature>
    </WeatherContainer>
  );
};

export default EventWeather;
