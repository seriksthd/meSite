import { useState } from "react";
import styled from "styled-components";
import GroupIcons from "./GroupIcons";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01101a2a-181d-4ef6-84c2-a16527039849");
    formData.append("from_site", window.location.hostname);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "462px",
            }}
          >
            <StyledInput type="text" name="name" placeholder="Name:" required />
            <StyledInput
              type="email"
              name="email"
              placeholder="Email:"
              required
            />
            <input
              type="text"
              name="Message:"
              placeholder="Message"
              style={{
                height: "98px",
                borderRadius: "8px",
                color: "#F5F5F5",
                backgroundColor: "#f5f5f120",
                border: "none",
                padding: "0 0 0 10px",
              }}
              required
            />
            <input type="hidden" name="from_name" value="Serik Kamytov" />
            <input
              type="hidden"
              name="subject"
              value="New Message from Serik Kamytov"
            />
            <input type="hidden" name="replyto" value="customer@example.com" />
          </div>

          <button
            type="submit"
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
        <span>{result}</span>
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
