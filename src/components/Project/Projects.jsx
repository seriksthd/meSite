import React from "react";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <div
      id="projects"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "#7562E0", fontSize: "32px" }}>Featured projects:</h1>
      <h3 style={{ color: "#fff", fontSize: "18px" }}>
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </h3>
      <ProjectList />
    </div>
  );
}
