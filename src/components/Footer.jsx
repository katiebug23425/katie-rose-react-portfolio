// import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import "../style/Footer.css";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/katiebug23425",
    icon: <FaGithub />,
    color: "#5DE512",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/katie-rose-alford",
    icon: <FaLinkedin />,
    color: "#2EACE8",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/24902316/katie-rose-alford",
    icon: <FaStackOverflow />,
    color: "#2EACE8",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url, icon }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
          <h5 className="designer-text">Designed by Katie Rose Alford</h5>
            <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
        </section>
      </div>
    </footer>
  );
};

export default Footer;