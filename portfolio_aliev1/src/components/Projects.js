import React from "react"
import Title from "./Title"
import Project from "./Project"
import OuterContentContainer from "./OuterContentContainer"
import InsidePart from "./InnerContentContainer"
import ButtonComp from "./ButtonLink"

// Here we define the Projects section
const Projects = ({ projects, title, showLink }) => {
  return (
    <OuterContentContainer>
      <Title title={title} />
      <InsidePart type="projects">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </InsidePart>
      {showLink && <ButtonComp to="/projects" center name="Alla projekt" />}
    </OuterContentContainer>
  )
}

export default Projects
