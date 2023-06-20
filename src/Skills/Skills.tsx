import React from "react";
/* import c from "../common/styles/Container.module.css"; */
import "../App.css"
import s from "./Skills.module.css";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <section className="container skills">
      <h2>My skills</h2>
      <div className="skills">
        <SkillCard
          skillTitle={"HTML"}
          skillDecription={"Decription for HTML"}
        />
        <SkillCard skillTitle={"CSS"} skillDecription={"Decription for CSS"} />
        <SkillCard
          skillTitle={"JavaScript"}
          skillDecription={"Decription for JavaScript"}
        />
      </div>
    </section>
  );
};
