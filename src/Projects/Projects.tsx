import React from "react";
import s from "./Project.module.css";

import c from "../common/styles/Container.module.css";

import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className={s.project}>
      <h2>My Projects</h2>
      <div className={`${c.container} ${c.project}`}>
        <ProjectCard
          projectDescription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
          projectTitle={"Project 1"}
        />
        <ProjectCard
          projectDescription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur"
          }
          projectTitle={"Project 2"}
        />
        <ProjectCard
          projectDescription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
          projectTitle={"Project 3"}
        />
      </div>
    </div>
  );
};
