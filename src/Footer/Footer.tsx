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
        <div className="photos">

          <a href="https://t.me/Rainmen" target="_blank">
            <img src={telegramIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/denis-potarykin/" target="_blank">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="#" target="_blank">
           <img src={githubIcon} alt="" />
          </a>
          <a href="#" target="_blank">
           <img src={whatsappIcon} alt="" />
          </a>
          

          
          
          
        </div>
        <span>2024. All rights reserved.</span>
      </div>
    </footer>
  );
};
