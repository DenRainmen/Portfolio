import React from "react";
/* import c from "../common/styles/Container.module.css"; */
import "../App.css"
import s from "./Skills.module.css";
import { SkillCard } from "./SkillCard";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import htmlIcon from "../assets/images/html.svg"
import cssIcon from "../assets/images/css.svg"
import jsIcon from "../assets/images/js.svg"

export const Skills = () => {
  return (
    <section className="container skills">
      {/* <h2>My skills</h2> */}
      <TitleComponent>My skills</TitleComponent>
      <div className="skills" id="skills">

        <SkillCard
          skillTitle={"HTML"}
          skillDecription={"Decription for HTML"}
          skillIcon={htmlIcon}
        />
        <SkillCard
         skillTitle={"CSS"}
         skillDecription={"Decription for CSS"}
         skillIcon={cssIcon}
          />

        <SkillCard
          skillTitle={"JavaScript"}
          skillDecription={"Decription for JavaScript"}
          skillIcon={jsIcon}
        />
      </div>
    </section>
  );
};
