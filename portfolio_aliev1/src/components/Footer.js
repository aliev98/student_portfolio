import React from "react"
import SocialLinks from "../constants/socialLinks"
import styled from 'styled-components'

const FooterStyling = styled.footer `
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
  
  h4 {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: normal;
    text-transform: uppercase;

    span {
      color: ${({ theme }) => theme.colors.primary5};
    }
  }
`


const Footer = () => {
  return (
      //  <footer className="footer"> 
      <FooterStyling>

      <div className="footer-content">
        <SocialLinks styleClass="footer-links"></SocialLinks>
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