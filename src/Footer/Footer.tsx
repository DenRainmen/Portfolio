import React from "react";
import s from "./Footer.module.css";

import telegramIcon from '../assets/images/telegram.svg'
import linkedinIcon from '../assets/images/linkedin.svg'
import githubIcon from '../assets/images/github.svg'
import whatsappIcon from '../assets/images/whatsapp.svg'

import "../App.css"

export const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer">
        <h3 className={s.title_h3}>Denis Potarykin</h3>
        <div className = "photos">
          <img src={telegramIcon} alt="" />
          <img src={linkedinIcon} alt="" />
          <img src={githubIcon} alt="" />
          <img src={whatsappIcon} alt="" />
        </div>
        <span>2024. All rights reserved.</span>
      </div>
    </footer>
  );
};
