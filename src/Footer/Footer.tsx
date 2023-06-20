import React from "react";
import s from "./Footer.module.css";

import c from "../common/styles/Container.module.css";

import "../App.css"

export const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer">
        <h3 className={s.title_h3}>Denis Potarykin</h3>
        <div className = "photos">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <span>2024. All rights reserved.</span>
      </div>
    </footer>
  );
};
