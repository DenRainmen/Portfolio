import React from "react";
import s from "./Contacts.module.css";
import c from "../common/styles/Container.module.css";

export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <h3>Contacts</h3>
      <div className={`${c.container} ${c.contacts}`}>
        <form action="">
          <input type="text" />
          <input type="text" />
          <textarea name="" id=""></textarea>
          <input type="button" value="Submit" />
        </form>
      </div>
    </div>
  );
};
