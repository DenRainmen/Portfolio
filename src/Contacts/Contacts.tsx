import React from "react";
import s from "./Contacts.module.css";
/* import c from "../common/styles/Container.module.css"; */
import "../App.css"
import { TitleComponent } from "../TitleComponent/TitleComponent";

export const Contacts = () => {
  return (
    <section className="container contacts">
      
      <TitleComponent>Contacts</TitleComponent>
      <div className="contacts">
        <form action="">
          <input type="text" />
          <input type="text" />
          <textarea name="" id=""></textarea>
          <input type="button" value="Submit" />
        </form>
      </div>
    </section>
  );
};
