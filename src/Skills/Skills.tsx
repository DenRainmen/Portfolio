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
      <div className={s.skillsDescription}>
        <ul>
          <li>
            Знание JavaScript ES16-22;
          </li>
          <li>
            Умение верстать по технике PixelPerfect;
          </li>
          <li>
            Нейминг по методологии БЭМ;

          </li>
          <li>
            Работа с HTML-препроцессорами (pug);

          </li>
          <li>
            Работа с CSS-препроцессорами (SCSS/SASS);

          </li>
          <li>
            Адаптивная/кроссбраузерная верстка;

          </li>
          <li>
            Работа с  axios, Fetch API;


          </li>
          <li>
            Работа с инструментами сборки (npm, yarn, Vite, CRA);


          </li>
          <li>
            Компонентный подход в разработке;
          </li>
          <li>
            Умение работать с чужим кодом;
          </li>
          <li>
            Соблюдение заданных на проекте стандартов и требований;
          </li>
          <li>
            Базовое владение JS-библиотекой React + Redux;
          </li>
          <li>
            Знание систем контроля версий Git;
          </li>
          <li>
            Базовые навыки работы с инструментами дизайна и обработки изображений(Figma);

          </li>
          <li>
            Опыт написания тестов;
          </li>
          <li>
            TypeScript.
          </li>




        </ul>
      </div>
    </section>
  );
};
