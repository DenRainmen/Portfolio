import React from "react";
import s from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <a href="#">Home</a>
      <a href="#">Skills</a>
      <a href="#">Projects</a>
      <a href="#">Contacts</a>
    </nav>
  );
};
