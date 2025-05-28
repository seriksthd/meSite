import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";
import SkillsList from "./SkillList";

export default function About() {
  return (
    <div
      id="about"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "20px 0 50px 0 ",
      }}
    >
      <div>
        <h1 style={{ color: "#7562E0", fontSize: "32px" }}>About me:</h1>
        <p style={{ color: "#fff", fontSize: "18px" }}>
          Hi, my name is serik kamytov, i am a web developer I have honed my skills in Web
          Development i have core understanding of advance UI design principles.
          Here are the major skills i have.
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ color: "#7562E0", fontSize: "96px" }}>5+</h1>
        <p style={{ color: "#fff", fontSize: "24px" }}>
          Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom:"20px"
          }}
        >
          <StyledCartAbout>UI & UX DESIGNING</StyledCartAbout>
          <StyledCartAbout>
            <Icons.code /> <span>WEB DEVELOPMENT</span>
          </StyledCartAbout>
          <StyledCartAbout>
            <Icons.android />
            <span> MOBILE DEVELOPMENT</span>
          </StyledCartAbout>
          <StyledCartAbout>
            <Icons.python /> <span>WEB SCRAPING WITH PYTHON</span>
          </StyledCartAbout>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px",}}>
          <h1 style={{ color: "#7562E0", fontSize: "32px" }}>
            The services i offer:
          </h1>
          <SkillsList />
        </div>
      </div>
    </div>
  );
}

const StyledCartAbout = styled.div`
  width: 256px;
  height: 254px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 10px;
  padding: 20px;
  font-size: 24px;
  color: #fff;
  &:hover {
    background-color: #7562e0;
  }
`;
