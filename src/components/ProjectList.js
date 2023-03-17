import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  
  const projectItem =  projects.map((item)=> 
  <ProjectItem key={item.id} technologies={item.technologies} name={item.name} about={item.about}/>)
  



  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">

      {projectItem}
      </div>
    </div>
  );
}

export default ProjectList;
