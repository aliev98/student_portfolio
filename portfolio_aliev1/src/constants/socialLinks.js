import React from "react"
import styled from "styled-components"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

// This was also a tricky component because of the animation

const data = [
  {
    id: 1,
    icon: <FaLinkedin/>,
    url: "https://www.linkedin.com/in/vandenoutenaar/",
  },  
  {
    id: 2,
    icon: <FaTwitterSquare />,
    url: "https://twitter.com/EricOutenaar",
  },
  {
    id: 3,
    icon: <FaFacebookSquare/>,
    url: "https://m.facebook.com/eric.vandenoutenaar",
  },
]


  
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url}>
        {link.icon}
      </a>
    </li>
  )
})

const StyledList = styled.ul`
  margin: ${({ type }) =>
    type === "footer" ? "1rem auto 0rem 0rem" : "1rem 0 0 0"}
  width: 10rem;
  display: flex;
  justify-content: ${({ type }) =>
    type === "footer" ? "center" : "flex-start"};
  font-size: 1.75rem;

  a {
    font-size: 1.75rem;
    color: ${({ theme, type }) =>
      type === "footer" ? theme.colors.white : theme.colors.grey1};
    transition: ${({ theme }) => theme.transitions.transition};
    padding: 0 1rem 0 0;
    :hover {
      color: ${({ theme }) => theme.colors.primary5};
    }
  }

  li {
    opacity: ${({ type }) => (type === "footer" ? "1" : "0")};
    animation: ${({ type }) =>
      type !== "footer" && "slideUp 0.5s ease-in-out 0.3s forwards"};
  }
  li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  li:nth-of-type(4) {
    animation-delay: 1s;
  }
  li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
`

export default ({ type = "default" }) => {
  return <StyledList type={type}>{links}</StyledList>
}
