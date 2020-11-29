import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import styled from "styled-components"

// Here we define the projects page

const ProjectsContainer = styled.section`
  background: ${({ theme }) => theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
`

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projekt" description="Projektsidan" />
      <ProjectsContainer>
        <Projects projects={projects} title="Alla projekt" />
      </ProjectsContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
