// import React from "react"
// import Title from "./Title"
// import Project from "./Project"
// import { Link } from "gatsby"

// const Projects = ({ projects, title, showLink }) => {
//   return (
//     <section className="section projects">
//       <Title title={title} />

//       <div className="section-center projects-center">
//         {projects.map((project, index) => {
//           return <Project key={project.id} index={index} {...project} />
//         })}
//       </div>
      
//       {showLink && (
//         <Link to="/projects" className="btn center-btn">
//           Alla projekt
//         </Link>
//       )}

//     </section>
//   )
// }

// export default Projects


import React from "react"
import Title from "./Title"
import Project from "./Project"
import OuterContentContainer from "./containers/OuterPart"
import InnerContentContainer from "./containers/InnerPart"
import ButtonLink from "./containers/ButtonLink"

// Here we define the Projects section
const Projects = ({ projects, title, showLink }) => {
  return (
    <OuterContentContainer>
      <Title title={title} />
      <InnerContentContainer type="projects">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </InnerContentContainer>
      {showLink && <ButtonLink to="/projects" center name="Alla projekt" />}
    </OuterContentContainer>
  )
}

export default Projects
