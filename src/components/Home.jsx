import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <div
      id="home"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "end",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <StyledHomeContiner>
        <StyleHello>Hello, i’m</StyleHello>
        <StyleName>serik kamytov</StyleName>
        <StyledInfoLorem>
          web developer, front end developer, & Data Miner. I create seamless
          web experiences for end-users.
        </StyledInfoLorem>
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              backgroundColor: "#7562E0",
              width: "160px",
              height: "48px",
              borderRadius: "8px",
              border: "1px solid #7562E0",
              color: "#fff",
            }}
          >
            About me
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              width: "160px",
              height: "48px",
              borderRadius: "8px",
              border: "1px solid #7562E0",
              color: "#fff",
            }}
          >
            Projects
          </button>
        </div>
      </StyledHomeContiner>
      <div>
        <StyledRadius>
          <ImageStyled
            src="src/assets/image/photo_2025-03-28_16-09-52-Photoroom.png"
            alt=""
          />
        </StyledRadius>
      </div>

      <div
        style={{
          width: "100%",
          height: "128px",
          background: "#181824",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      ></div>
    </div>
  );
}

const ImageStyled = styled.img`
  width: 400px;
  position: relative;
  left: 50px;
  bottom: 40px;
  @media (max-width: 768px) {
    width: 300px;
    left: 30px;
    bottom: 60px;
  }
`;
const StyledInfoLorem = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;
const StyledHomeContiner = styled.div`
  width: 435px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 200px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
    width: 100%;
  }
`;
const StyleHello = styled.h2`
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const StyleName = styled.h1`
  font-size: 52px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const StyledRadius = styled.div`
  width: 486px;
  height: 486px;
  background-color: #7562e0;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;
