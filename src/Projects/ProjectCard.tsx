import React from "react";
import s from "./Project.module.css";

type PropsType = {
  projectTitle: string;
  projectDescription: string;
  style?: {backgroundImage: string}
};

export const ProjectCard = (props: PropsType) => {
  return (
    <div className={s.projectCard}>
     {/*  <div style={props.style} className={s.projectLogo} > */}
     <div className={s.projectLogo} >
        <a href="#">
          <button>Watch</button>
        </a>
      </div>
      <h4 className={s.projectTitle}>{props.projectTitle}</h4>
      <p className={s.projectDescription}>
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
        veritatis? */}
        {props.projectDescription}
      </p>
    </div>
  );
};
