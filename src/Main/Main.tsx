import React from "react";
import s from "./Main.module.css";
import c from "../common/styles/Container.module.css";

export const Main = () => {
  return (
    <div className={s.main}>
      <div className={`${c.container} ${c.main}`}>
        <div className={s.greeting}>
          <span>Hi !</span>
          <h1>Im Denis Potarykin</h1>
          <p>Im frontend developer </p>
        </div>

        <div className={s.photo}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
