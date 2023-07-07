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
            Владение JS-библиотекой React + Redux;
          </li>
          <li>
            TypeScript.
          </li>
          <li>
            Опыт написания тестов (TDD , Jest, Vitest);
          </li>
          <li>
            Работа с инструментами сборки (npm, yarn, Vite, CRA);
          </li>
          <li>
            Знание JavaScript ES16-22;
          </li>
          <li>
            Знание систем контроля версий Git;
          </li>
          <li>
            Навыки работы с инструментами дизайна и обработки изображений(Figma, Pixco);

          </li>
          <li>
            Работа с CSS-препроцессорами (SCSS/SASS);

          </li>
          <li>
            Умение верстать по технике PixelPerfect;
          </li>



          <li>
            Работа с HTML-препроцессорами (pug);

          </li>

          <li>
            Адаптивная/кроссбраузерная верстка;

          </li>
          <li>
            Работа с  axios, Fetch API;


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
            Нейминг по методологии БЭМ;
          </li>








        </ul>
{/* <div className={s.progress}>
        <div className="progress-radial progress-85"><b></b></div>
        <div className="progress-radial progress-25"><b></b></div>
</div> */}
      </div>
    </section>
  );
};
