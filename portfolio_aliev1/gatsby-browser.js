import "./src/css/main.css"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

// /*
//     In this file I will create the global styles and make the styling theme
//     available in all underlying components.
// */

const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: ${({ theme }) => theme.fonts.secondary};
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.grey3};
        line-height: 1.5;
        font-size: 0.875rem;
        margin-top: 0rem;
        
        h1,
        h2,
        h3,
        h4 {
          letter-spacing: ${({ theme }) => theme.spacings.spacing};
          text-transform: capitalize;
          line-height: 1.25;
          margin-bottom: 0.75rem;
          font-family: ${({ theme }) => theme.fonts.primary};
        }
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2rem;
        }
        h3 {
          font-size: 1.25rem;
        }
        h4 {
          font-size: 0.875rem;
        }
        @media screen and (min-width: 800px) {
          h1 {
            font-size: 4rem;
          }
          h2 {
            font-size: 2.5rem;
          }
          h3 {
            font-size: 1.75rem;
          }
          h4 {
            font-size: 1rem;
          }
          body {
            font-size: 1rem;
          }
          h1,
          h2,
          h3,
          h4 {
            line-height: 1;
          }
        }
        ul {
          list-style-type: none;
        }
        a {
          text-decoration: none;
        }
      }
      
      @keyframes slideRight {
        0% {
          transform: translateX(-200px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideUp {
        0% {
          transform: translateY(200px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      button {
          text-transform: uppercase;
          background: ${({ theme }) => theme.colors.primary5};
          color: ${({ theme }) => theme.colors.primary9};
          padding: 0.375rem 0.75rem;
          letter-spacing: ${({ theme }) => theme.spacings.spacing};
          display: inline-block;
          font-weight: 700;
          -webkit-transition: ${({ theme }) => theme.transitions.transition};
          transition: ${({ theme }) => theme.transitions.transition};
          font-size: 0.875rem;
          border: 2px solid transparent;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          border-radius: ${({ theme }) => theme.radius.radius};
      
       :hover {
          color: ${({ theme }) => theme.colors.primary1};
          background: ${({ theme }) => theme.colors.primary8};
        }

      }
      p {
        margin-bottom: 1.25rem;
        color: ${({ theme }) => theme.colors.grey3};
      }
  
  
      section {
        padding: 5rem 0;
      }
    
    `

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)