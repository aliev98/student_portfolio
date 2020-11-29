import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import ButtonComp from "../components/ButtonLink"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import downloadFile from "../../static/cv.pdf"
import styled from "styled-components"  

// Here we define the about page

const StyledAboutPage = styled.section`
  background: ${({ theme }) => theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
  padding: 7rem 0;
`
const AboutContentContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
`
const StyledAboutImage = styled(props => <Image {...props} />)`
  margin-bottom: 2rem;
  height: 25rem;
  @media screen and (min-width: 992px) {
    grid-column: 1 / span 5;
    margin-bottom: 0;
  }
`
const AboutTextContainer = styled.article`
  grid-column: 6 / -1;
  p {
    line-height: 2;
  }
  button {
    margin: 0 2rem 0 0;
    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
const StyledStack = styled.div`
  span {
    display: inline-block;
    background: ${({ theme }) => theme.colors.grey9};
    color: ${({ theme }) => theme.colors.grey5};
    margin: 0.5rem 0.5rem 1rem 0;
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.radius.radius};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  //console.log(nodes)
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="CV" description="Erics CV" />
      <StyledAboutPage>
        <AboutContentContainer>
          <StyledAboutImage fluid={image.childImageSharp.fluid} />
          <AboutTextContainer>
            {/* <Title title={title} */}
            {/*<p>{info}</p>*/}
            <ReactMarkdown source={info} />
            <StyledStack>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </StyledStack>

            <button>
              <a href={downloadFile} download>
                Ladda ner fullständigt CV
              </a>
              {` `}
            </button>
            <ButtonComp name="kontakta mig" to="/contact" />
          </AboutTextContainer>
        </AboutContentContainer>
        <></>
      </StyledAboutPage>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
