import React from "react";
import s from "./Skills.module.css";


type PropsType = {
  skillTitle: string;
  skillDecription: string;
  skillIcon?: string;

};

export const SkillCard = (props: PropsType) => {
  return (
    <div className={s.skillCard}>
      <div className={s.skillLogo}>
        <img src={props.skillIcon} width="60px" />
      </div>
      <h3 className={s.skillTitle}>{props.skillTitle}</h3>
      {/* <p className={s.skillDescription}>{props.skillDecription}</p> */}
    </div>
  );
};
