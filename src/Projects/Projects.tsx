import React from "react";
import s from "./Project.module.scss";

/* import c from "../common/styles/Container.module.css"; */
import "../App.css"
import { ProjectCard } from "./ProjectCard";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import todoImage from "../assets/images/to-do-list-apps.png" 
import socialImage from "../assets/images/social-network-app.png" 


export const Projects = () => {

  const todoImg = {
    backgroundImage: `url(${todoImage})`,
    
  };

  const socialImg = {
    backgroundImage: `url(${socialImage})`,
    
  };


  return (
    <section className="container project">

     
      <TitleComponent>My projects</TitleComponent>


      <div className="project" id="project">

        <ProjectCard
          projectDescription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
          projectTitle={"Todolist"}
          style={todoImg}
          link = {"https://todolist-dark-mode.vercel.app/"}
        />

        <ProjectCard
          projectDescription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur"
          }
          projectTitle={"Social Network"}
          style={socialImg}
          link ={"https://denrainmen.github.io/social-network/"}
        />

       
        
      </div>
    </section>
  );
};
