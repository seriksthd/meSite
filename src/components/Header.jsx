import React, { useState } from "react";
import styled from "styled-components";
import { navLinks } from "../utils/constnce";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    setActiveSection(id);
  };

  return (
    <StyledHeader>
      <StyledLogo>serik kamytov</StyledLogo>
      <span></span>
      <StyledNav>
        {navLinks.map((link) => (
          <StyledLink
            key={link.id}
            href="#"
            onClick={(e) => handleClick(e, link.id)}
            $isActive={activeSection === link.id}
          >
            {link.label}
          </StyledLink>
        ))}
      </StyledNav>
    </StyledHeader>
  );
}
const StyledLogo = styled.h1`
  font-size: 28px;
  color: #7562e0;
  font-weight: 700;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #181824;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  @media (max-width: 768px) {
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 18px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.$isActive ? "#7562e0" : "white")};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #7562e0;
  }
`;
