import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import styled from "styled-components"

// Here we create one 'Project in focus'

const ImageStyling = styled(props => <Image {...props} />)`
  border-top-left-radius: ${({ theme }) => theme.radius.radius};
  border-top-right-radius: ${({ theme }) => theme.radius.radius};
  height: 19rem;
  z-index: 1;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      ${({ theme }) => theme.colors.primary5},
      #222
    );
    opacity: 0.85;
    transition: ${({ theme }) => theme.transitions.transition};
  }

  @media screen and (min-width: 768px) {
    height: 22rem;
  }
  @media screen and (min-width: 992px) {
    grid-column: ${({ index }) => (index % 2 !== 0 ? "5/-1" : "1 / span 8")};
    grid-row: 1 / 2;
    height: 20rem;
    border-radius: ${({ theme }) => theme.radius.radius};
    box-shadow: ${({ theme }) => theme.shadows.darkShadow};
  }
`

const ProjectInfoPart = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-bottom-left-radius: ${({ theme }) => theme.radius.radius};
  border-bottom-right-radius: ${({ theme }) => theme.radius.radius};

  h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    border-radius: ${({ theme }) => theme.radius.radius};
    box-shadow: ${({ theme }) => theme.shadows.darkShadow};
    z-index: 1;
    grid-column: ${({ index }) => (index % 2 === 0 ? "5/ 11" : "2 / span 7")};
    grid-row: 1 / 1;
    text-align: ${({ index }) => index % 2 === 0 && "left"};
  }
`

const ProjectStyling = styled.article`
  display: grid;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }

  :hover ${ImageStyling} ::after {
    opacity: 0;
  }
`

const ProjectNumber = styled.div`
  display: inline-block;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary5};
  margin-bottom: 0.75rem;
`

const ProjectLinks = styled.div`
  a {
    color: ${({ theme }) => theme.colors.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;

    transition: ${({ theme }) => theme.transitions.transition};
    :hover {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`

const ProjectStack = styled.div`
  span {
    margin-bottom: 1rem;
    display: inline-block;
    background: ${({ theme }) => theme.colors.grey9};
    color: ${({ theme }) => theme.colors.grey5};
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.radius.radius};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <ProjectStyling>

      {image && (
        <ImageStyling fluid={image.childImageSharp.fluid} index={index} />
      )}
      
      <ProjectInfoPart index={index}>
        <ProjectNumber>0{index+1}.</ProjectNumber>
        <h3>{title || "Projekt"}</h3>
        <p>{description}</p>
       
        <ProjectStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjectStack>
        
        <ProjectLinks>
          {/*
          When I don't have links to my projects, I have fill the required 
          field in the strapi entry with a / . I will, for now, not display 
          any links for projects that I have not hosted somewhere. 
          */}
          {github !== "/" && (
            <a href={github} target="_blank">
              <FaGithubSquare />
            </a>
          )}
          {url !== "/" && (
            <a href={url} target="_blank">
              <FaShareSquare />
            </a>
          )}
        </ProjectLinks>
      </ProjectInfoPart>
    </ProjectStyling>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project