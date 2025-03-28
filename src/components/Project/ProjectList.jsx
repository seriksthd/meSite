import React from "react";
import ProjectCart from "./ProjectCart";
import { projects } from "../../utils/constnce";

export default function ProjectList() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {projects.map((project) => (
        <ProjectCart key={project.id} project={project} />
      ))}
    </div>
  );
}
