import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock-upgrade";
import React, { useState } from "react";
import { BiSolidEnvelope } from "react-icons/bi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { TbMenu2, TbX } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <aside className={`${menuOpen ? "" : "menuClosedAside"}`}>
      <img src="./pfp.png" className="pfp" />
      <div className="topPartNav">
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: 0,
              textShadow: "1px 1px 10px #000",
            }}
          >
            Mato Martinović
          </h1>
          <h2
            style={{
              marginTop: 0,
              fontSize: "1.2rem",
              textShadow: "1px 1px 10px #000",
            }}
          >
            Software developer
          </h2>
        </div>
        {menuOpen ? (
          <TbX
            size={32}
            onClick={() => {
              enableBodyScroll(document.querySelector("aside"));
              setMenuOpen(false);
            }}
          />
        ) : (
          <TbMenu2
            size={32}
            onClick={() => {
              setMenuOpen(true);
              disableBodyScroll(document.querySelector("aside"));
            }}
          />
        )}
      </div>
      <nav
        className={`menuItems${menuOpen ? "" : " menuClosed"}`}
        onClick={() => {
          enableBodyScroll(document.querySelector("aside"));
          setMenuOpen(false);
        }}
      >
        <NavLink to="/">About me</NavLink>
        <NavLink to="/expertise">Expertise</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-around",
            alignItems: "center",
            padding: 30,
          }}
        >
          <a href="https://github.com/mato-m" target="_blank">
            <SiGithub size={48} color="#fff" />
          </a>
          <a href="https://linkedin.com/in/mato-m" target="_blank">
            <SiLinkedin size={48} color="#fff" />
          </a>
          <a href="mailto:martinovic.mato99@gmail.com">
            <BiSolidEnvelope size={48} color="#fff" />
          </a>{" "}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
