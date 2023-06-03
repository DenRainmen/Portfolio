import React from "react";
import s from "./WorkVariants.module.css";

import c from "../common/styles/Container.module.css";

export const WorkVariants = () => {
  return (
    <section className={s.variants}>
      <div className={`${c.container} ${c.variants}`}>
        <h3>Looking into remote work options</h3>
        <a href="#">
          <button>Contact me</button>
        </a>
      </div>
    </section>
  );
};
