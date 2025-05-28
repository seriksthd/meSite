import { Icons } from "../assets";

export default function SkillCard({ skill }) {
  const IconComponent = Icons[skill.icon];
  return (
    <div
      key={skill.id}
      style={{
        width: "341px",
        height: "338px",
        border: skill.border,
        padding: "20px",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "16px",
      }}
    >
      <IconComponent />
      <h2 style={{ color: skill.color }}>{skill.title}</h2>
      <p style={{ color: "#fff", fontSize: "17px" }}>{skill.description}</p>
    </div>
  );
}
