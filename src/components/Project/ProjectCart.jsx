import React from "react";

export default function ProjectCart({ project }) {
  return (
    <div
      style={{
        width: "343px",
        height: "417px",
        padding: "15px",
        backgroundColor: "#31313F",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <img src={project.image} alt={project.title} style={{ width: "100%" }} />
      <h2 style={{ color: "#7562E0" }}>{project.title}</h2>
      <h3 style={{ color: "#fff", fontSize: "20px" }}>{project.description}</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            color: "#fff",
            width: "145px",
            height: "43px",
            backgroundColor: "#7562E0",
            border: "2px solid #7562E0",
            borderRadius: "8px",
          }}
        >
          View Live
        </button>
        <button
          style={{
            color: "#fff",
            width: "144px",
            height: "43px",
            backgroundColor: "#7562E0",
            border: "2px solid #7562E0",
            borderRadius: "8px",
          }}
        >
          Github Repo
        </button>
      </div>
    </div>
  );
}
