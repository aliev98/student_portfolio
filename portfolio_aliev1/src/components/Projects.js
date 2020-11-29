import React from "react"
import Title from "./other/Title"
import Project from "./Project"
import InsidePart from "./other/InnerSection"
import ButtonComp from "./other/ButtonComp"
import styled from "styled-components"



const StyledContainer = styled.section`
  padding: 5rem 0;
  background: ${({ theme, grey }) => grey && theme.colors.grey10};
`

const ProjectsContainer = ({ children, grey }) => {
  return <StyledContainer grey={grey}>{children}</StyledContainer>
}


const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsContainer>
      <Title title={title} />
      <InsidePart type="projects">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </InsidePart>
      {showLink && <ButtonComp to="/projects" center name="Alla projekt" />}
    </ProjectsContainer>
  )
}

export default Projects
