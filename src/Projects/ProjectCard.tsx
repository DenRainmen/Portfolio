import React from "react";
import s from "./Project.module.css";

type PropsType = {
  projectTitle: string;
  projectDescription: string;
};

export const ProjectCard = (props: PropsType) => {
  return (
    <div className={s.projectCard}>
      <div className={s.projectLogo}>
        <a href="#">
          <button>Watch</button>
        </a>
      </div>
      <h3 className={s.projectTitle}>{props.projectTitle}</h3>
      <p className={s.projectDescription}>
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
        veritatis? */}
        {props.projectDescription}
      </p>
    </div>
  );
};
