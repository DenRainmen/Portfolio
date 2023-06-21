import React from "react";
import s from "./Contacts.module.css";
/* import c from "../common/styles/Container.module.css"; */
import "../App.css"
import { TitleComponent } from "../TitleComponent/TitleComponent";

export const Contacts = () => {
  return (
    <section className="container contacts">
      
      <TitleComponent>Link to me</TitleComponent>
      <div className="contacts">
        <form action="">
          <input className={s.form_control} type="text" placeholder="Name" required />
          <input className={s.form_control} type="text" placeholder="E-mail" required />
          <textarea className={s.form_control} name="" id="" placeholder="Your message" rows = {7} required></textarea>
          <input type="button" value="Submit" />
        </form>
      </div>
    </section>
  );
};
