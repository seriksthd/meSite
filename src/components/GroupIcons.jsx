import React from "react";
import { Icons } from "../assets";

export default function GroupIcons() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Icons.facebook />
      <Icons.instagram />
      <Icons.dribbble />
      <Icons.sms />
    </div>
  );
}
