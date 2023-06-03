import React from "react";
import s from "./Footer.module.css";

import c from "../common/styles/Container.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${c.container} ${c.footer}`}>
        <h3>Denis Potarykin</h3>
        <div className={c.photos}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <span>2023. All rights reserved.</span>
      </div>
    </footer>
  );
};
