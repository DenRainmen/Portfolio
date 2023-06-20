import React from "react";
/* import c from "../common/styles/Container.module.css"; */
import "../App.css"
import s from "./Skills.module.css";
import { SkillCard } from "./SkillCard";
import { TitleComponent } from "../TitleComponent/TitleComponent";

export const Skills = () => {
  return (
    <section className="container skills">
      {/* <h2>My skills</h2> */}
      <TitleComponent>My skills</TitleComponent>
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
