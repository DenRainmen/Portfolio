import React from "react";
import s from "./Skills.module.css";

type PropsType = {
  skillTitle: string;
  skillDecription: string;
};

export const SkillCard = (props: PropsType) => {
  return (
    <div className={s.skillCard}>
      <div className={s.skillLogo}></div>
      <h3 className={s.skillTitle}>{props.skillTitle}</h3>
      <p className={s.skillDescription}>{props.skillDecription}</p>
    </div>
  );
};
