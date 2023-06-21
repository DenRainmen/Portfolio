import React from "react";
import s from "./Header.module.scss";
import { Nav } from "../Nav/Nav";
/* import c from "../common/styles/Container.module.css"; */
import "../App.css"

export const Header = () => {
  return (
    <header className={`container ${s.header}`}>
      <div className={`${s.header}`}>
        <Nav />
      </div>
    </header>
  );
};
