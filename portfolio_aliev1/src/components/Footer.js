import React from "react"
import SocialLinks from "../constants/socialLinks"
import styled from 'styled-components'

const FooterStyling = styled.footer `
  height: 9rem;
  /* background: #222; */
  background: ${({ theme }) => theme.colors.primary3};
  text-align: center;
  display: grid;
  place-items: center;

  .footerlinks{
    display:flex;
    justify-content:center;
  }
  
  h4 {
    margin-top: 0.9rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: normal;
    text-transform: uppercase;

    span {
      color: ${({ theme }) => theme.colors.primary7};
    }
  }
`

const Footer = () => {
  return (
      //  <footer className="footer"> 
      <FooterStyling>
      <div className="footer-content">

      <div class = "footerlinks">
        <SocialLinks styleClass="footer-links"></SocialLinks>
      </div>
      
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>FrontendMAGIC</span> | all rights reserved
        </h4>
      </div>
      </FooterStyling>
    //  </footer>
  )
}

export default Footer