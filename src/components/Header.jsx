import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { navLinks } from "../utils/constnce";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiX } from "react-icons/bi";

export default function Header({
  setBurgerMenu,
  burgerMenu,
  handleClickBurgerMenu,
}) {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    setActiveSection(id);
    setBurgerMenu(false);
  };

  return (
    <StyledHeader>
      <StyledLogo>serik kamytov</StyledLogo>
      <BurgerMenuWrapper>
        {burgerMenu ? (
          <BiX
            onClick={handleClickBurgerMenu}
            style={{
              color: "#bdbdbd",
              fontSize: "38px",
              cursor: "pointer",
              position: "absolute",
              bottom: "25px",
              right: "15px",
            }}
          />
        ) : (
          <span onClick={handleClickBurgerMenu}>
            <GiHamburgerMenu
              style={{ color: "#bdbdbd", fontSize: "28px", cursor: "pointer" }}
            />
          </span>
        )}
      </BurgerMenuWrapper>

      {burgerMenu && (
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
      )}

      <DesktopNav>
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
      </DesktopNav>
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
  padding: 0 20px;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const BurgerMenuWrapper = styled.div`
  display: block;
  z-index: 10;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #181824;
  width: 50%;
  height: 25vh;
  padding: 20px;
  border-radius: 8px;
  position: absolute;
  right: 0;
  top: 40px;
`;

const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 18px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => (props.$isActive ? "#7562e0" : "white")};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #7562e0;
  }
`;
