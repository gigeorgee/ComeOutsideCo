import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 35px;
  width: auto;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContent>
        <Link to="/">
          <LogoImage src={Logo} alt="Come Outside Logo" />
        </Link>
        <NavLinks>
          <Link to="/waiver" className="btn btn-primary">
            Sign Waiver
          </Link>
        </NavLinks>
      </NavContent>
    </Nav>
  );
};

export default Navbar;