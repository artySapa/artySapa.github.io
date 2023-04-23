import { React } from "react";
import "./FooterP.css";

export default function FooterP() {
  return (
    <div className="footer">
      <div class="footerEntry">
        <p className="footerLink">
          <a
            href="https://www.instagram.com/sapartyom/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </p>
        <p className="footerLink">
          <a
            href="https://www.linkedin.com/in/sapartyom/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </p>
        <p className="footerLink">sapartyom@g.ucla.edu</p>
        <p className="footerLink">(424)415-2827</p>
      </div>
    </div>
  );
}
