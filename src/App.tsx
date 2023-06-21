import React from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { WorkVariants } from "./WorkVariants/WorkVariants";
import { Contacts } from "./Contacts/Contacts";
import { Footer } from "./Footer/Footer";
import { AsideMenu } from "./Aside menu/AsideMenu";

export const App = () => {
  return (
    <div className="App">
      <AsideMenu/>
      <Header />
<div className={"main-wrapper"}>
      <Main />
      <Skills />
      <Projects />
      <WorkVariants />
      <Contacts />
      <Footer />
</div>
    </div>
  );
};
