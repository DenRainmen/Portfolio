import React from "react";
import s from "./Main.module.css";
/* import c from "../common/styles/Container.module.css"; */
import "../App.css"


export const Main = () => {
  return (
    <section>
      <div className="main">
        <div className={s.greeting}>
          <span>Hi !</span>
          <h1>I`m Denis Potarykin</h1>
          <p>I`m frontend developer </p>
        </div>
       {/*  <div className={s.photo}>  </div> */}
        
      </div>
    </section>
  );
};
