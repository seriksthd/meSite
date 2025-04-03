import React from "react";
import GroupIcons from "./GroupIcons";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <StyledNavBar>
          <a href="#" style={{ textDecoration: "none", color: "#ffffff50" }}>
            @2022 Jayjay Dinero Dinero
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#FFFFFF50" }}>
            Fullstack Developer
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#FFFFFF50" }}>
            UI Designer
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#FFFFFF50" }}>
            Data Analyst
          </a>
          <a
            href="#"
            style={{ textDecoration: "none", color: "#FFFFFF50    " }}
          >
            Designed by @ernestechie
          </a>
          <p style={{ color: "#FFFFFF50" }}>+996 755 800 302</p>
        </StyledNavBar>
        <GroupIcons />
      </div>
    </StyledFooter>
  );
}

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const StyledFooter = styled.footer`
  width: 80%;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;
