import React from "react";
let date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © {year} - All right reserved by SAIDAKBAR OVILOV</p>
      </aside>
    </footer>
  );
}

export default Footer;
