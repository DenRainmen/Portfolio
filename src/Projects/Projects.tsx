import React from "react";
import s from "./Project.module.css";

/* import c from "../common/styles/Container.module.css"; */
import "../App.css"
import { ProjectCard } from "./ProjectCard";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import todoImage from "../assets/images/squad.png" 


export const Projects = () => {

  const backImg = {
    backgroundImage: `url(${todoImage})`,
    
  };


  return (
    <section className="container project">

     
      <TitleComponent>My projects</TitleComponent>


      <div className="project">

        <ProjectCard
          projectDescription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
          projectTitle={"Todolist"}
          style={backImg}
        />

        <ProjectCard
          projectDescription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur"
          }
          projectTitle={"Social Network"}
          style={backImg}
        />

       
        
      </div>
    </section>
  );
};
