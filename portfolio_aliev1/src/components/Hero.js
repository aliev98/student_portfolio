import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
import styled from "styled-components"
import ButtonComp from "./other/ButtonComp"
import {Underline}   from "./other/Underline"

const MainHeroStyling = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: ${({ theme }) => theme.colors.blue};
  position: relative;
`

const SectionSyling = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.widths.maxWidth};
  height: 100%;
  display: grid;
  align-items: center;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`

const ImageWrap = styled.div`

  /* display: none; */
    grid-row: 1/2;
    grid-column: 2/2;
    
    img{
      border-radius:1%;
    }
  
@media screen and (min-width: 992px) {
    display: block;
    position:relative;
    right: 40px;
    grid-row: 3/4;
    grid-column: 8/-3;
}

@media only screen and (max-width: 600px){
  display:none;
}

`

const HeroInfo = styled.article`
  background: ${({ theme }) => theme.colors.white};
  h1,
  h4 {
    text-transform: none;
  }
  
  @media screen and (min-width: 992px) {
    
    grid-column: 1 / span 5;
    grid-row: 3 / auto;
    margin-top: 40px;
    padding-bottom:-10px;
  
    }

  @media screen and (min-width: 1536px){
    .stuffaboutme{
      line-height:38px;
      margin-bottom:19px;
  }
}
`

const Contactbutton = styled.div`
margin: 1rem 0 1rem 0;
`

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)


  // console.log(data)

  return (
    // <header className="hero">
    <MainHeroStyling>
      {/* <div className="section-center hero-center"> */}
      <SectionSyling>
        {/* <article className="hero-info"> */}
        <HeroInfo>
          <div>
            <h1>I'm Ali</h1>

            {/* <div className="underline"></div> */}
           <Underline hero/>
           
            <h4>Tidigare säljare, läser till systemutvecklare</h4>
        
        <br />

        <div className ="stuffaboutme">
            - 🔭 Detta är min portfolio sida
            <br />
            - 🌱 Just nu lär jag mig React, Gatsby, GraphQL and Strapi
            {/* <br />
            - 🤔 I’m looking for help with anything frontend :)
            <br /> */}
            <br/>
            {/* - 💬 Jag tycker om att träffa nya personer
            <br /> */}
            - 😄 På fritiden brukar jag träna<br />- 💜{" "}
          
            <a target="_blank" rel="noopener noreferrer" href="https://strapi.io/documentation/v3.x/getting-started/introduction.html"> Strapi </a>
          
            ,{""}
            
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/getting-started.html"
            >
              React
            </a>
            
            ,{" "}

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org/docs/"
            >
              Gatsby
            </a>{" "}
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://styled-components.com/docs"
            >
              Styled Components
            </a>


            {/* <br />
            - ⚡ Fun fact: I used to fly planes
            <br /> */}
        
            <br/>
            - 📫 Ni kan nå mig på nedanstående länkar
            <br />
            </div>

           <Contactbutton> 
           <ButtonComp name="kontakta mig" to="/contact" /> 
           </Contactbutton>

           <ButtonComp name="Mitt cv" to="/about" />
            {/* <Link to="/contact" className="btn">
              kontakta mig
            </Link> */}
            <br/> <br/>
            <SocialLinks />
          </div>
          </HeroInfo>

        {/* </article> */}
        <ImageWrap>
        <Image fluid={fluid} className="hero-img" />
        </ImageWrap>
      {/* </div> */}
      
      </SectionSyling>
    </MainHeroStyling>
  // {/* </header> */}
  )
}

export default Hero