import React from "react";
import s from "./Header.module.scss";

import "../App.css"

import  {useState}  from "react"

export const Header = () => {


const[active, setActive] = useState(false)

const onClickHandler = () => {
 /*  alert("YO") */
 setActive(!active)

}


  return (
    <header className={`container ${s.header}`}>
      <div className={`${s.header}`}>



        <div className={s.photo}></div>

        <div
         className={active ? `${s.burger} ${s.active}` : s.burger}
         onClick = {onClickHandler}
         >

          <span></span>

        </div>

        <nav className={active ? `${s.nav} ${s.active}` : s.nav}>
          <a href="#">Home</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </nav>

      </div>
    </header>
  );
};
