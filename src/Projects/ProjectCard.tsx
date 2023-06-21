import React from "react";
import s from "./Project.module.scss";

type PropsType = {
  projectTitle: string;
  projectDescription: string;
  style?: {backgroundImage: string}
};

export const ProjectCard = (props: PropsType) => {
  return (
    <div className={s.projectCard}>
      <div className={s.projectLogo} style={props.style}  >
     
        <a href="#">
         Watch
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
