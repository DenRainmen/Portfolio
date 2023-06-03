import React from "react";
import s from "./Header.module.css";
import { Nav } from "../Nav/Nav";
import c from "../common/styles/Container.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={c.container}>
        <Nav />
      </div>
    </header>
  );
};
