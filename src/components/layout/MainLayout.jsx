import React from "react";
import Header from "../Header";
import Home from "../Home";
import Contact from "../Contact";
import Projects from "../Project/Projects";
import About from "../About";
import Footer from "../Footer";
import styled from "styled-components";

export default function MainLayout() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header scrollToSection={scrollToSection} />
      <StyledMain>
        <Home />
        <About />
        <Projects />
        <Contact />
      </StyledMain>
      <Footer />
    </div>
  );
}

const StyledMain = styled.main`
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
