import React from "react";
import styled from "styled-components";
import GroupIcons from "./GroupIcons";

export default function Contact() {
  return (
    <div
      id="contact"
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        marginTop: "30px",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1 style={{ fontSize: "32px", color: "#7562E0" }}>Connect with me:</h1>
        <p style={{ fontSize: "18px", color: "#fff" }}>
          Satisfied with me? Please contact me
        </p>
        <GroupIcons />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2 style={{ fontSize: "24px", color: "#fff" }}>
          Contact me, let’s make magic together
        </h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "462px",
            }}
          >
            <StyledInput type="text" placeholder="Name:" />
            <StyledInput type="email" placeholder="Email:" />
            <input
              type="text"
              placeholder="Message:"
              style={{
                height: "98px",
                borderRadius: "8px",
                color: "#F5F5F5",
                backgroundColor: "#f5f5f120",
                border: "none",
                padding: "0 0 0 10px",
              }}
            />
          </div>
          <button
            style={{
              width: "174px",
              height: "50px",
              fontSize: "18px",
              borderRadius: "8px",
              backgroundColor: "#7562E0",
              border: "none",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

const StyledInput = styled.input`
  height: 62px;
  border-radius: 8px;
  color: #f5f5f5;
  background-color: #f5f5f120;
  border: none;
  padding: 0 0 0 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
