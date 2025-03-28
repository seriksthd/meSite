import React from "react";
import { skills } from "../utils/constnce";
import SkillCard from "./SkillCart";

export default function SkillsList() {
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
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
}
