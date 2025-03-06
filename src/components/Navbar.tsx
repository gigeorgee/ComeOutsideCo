import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/Logo.png';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 35px;
  width: auto;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #69c280;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Link to="/">
          <Logo src={logo} alt="Come Outside Logo" />
        </Link>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/waiver">Waiver</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;