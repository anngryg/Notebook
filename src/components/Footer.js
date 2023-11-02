import React from "react";
import "./Footer.css";

export default function Footer() {
  let year = new Date();
  let currentYear = year.getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}
