import React, { useState } from "react";
import styled from "styled-components";
import { navLinks } from "../utils/constnce";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiX } from "react-icons/bi";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [burgerMenu, setBurgerMenu] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    setActiveSection(id);
    setBurgerMenu(false); 
  };
  const handleClickBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
  };
  return (
    <StyledHeader>
      <StyledLogo>serik kamytov</StyledLogo>
      {burgerMenu ? (
        ""
      ) : (
        <span onClick={handleClickBurgerMenu}>
          <GiHamburgerMenu
            style={{ color: "#bdbdbd", fontSize: "28px", cursor: "pointer" }}
          />
        </span>
      )}
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
      {burgerMenu && (
        <BiX
          onClick={handleClickBurgerMenu}
          style={{
            color: "#bdbdbd",
            fontSize: "38px",
            cursor: "pointer",
            order: "1",
            alignSelf: "end",
            justifyContent: "start",
            zIndex: "10",
            position: "absolute",
            bottom: "25px",
            right: "15px",
          }}
        />
      )}
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
  left: 0px;
  z-index: 10;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 18px;
  transition: all 0.9s ease;
  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    right: 0;
    top: 40px;
    gap: 10px;
    font-size: 30px;
    background-color: #181824;
    width: 50%;
    height: 30vh;
    padding: 20px;
    border-radius: 8px;
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
