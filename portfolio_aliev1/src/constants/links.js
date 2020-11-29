import React from "react"
import { globalHistory } from "@reach/router"
import { Link } from "gatsby"

/*
  A tricky component, because I hade to get the animations 
  working in the right way.
  I also use the globalHistory object of gatsby router in order
  to check which page we are. I use this in the sidebar. 
  If we are on the current page, don't show the link of that current 
  page. See Readme-file for the motivation of this functionality.
*/
import styled from "styled-components"
const data = [
  {
    id: 1,
    text: "hem",
    url: "/",
  },
  {
    id: 2,
    text: "mitt CV",
    url: "/about/",
  },
  {
    id: 3,
    text: "projekt",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blogg",
    url: "/blog/",
  },
  {
    id: 5,
    text: "kontakt",
    url: "/contact/",
  },
]

const StyledSideBarList = styled.ul`
li {
  opacity:0;
  animation: slideRight 0.5s ease-in-out 0.3s forwards;
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
a {
  display: block;   
  text-align: center;
  text-transform: capitalize;
  color: ${({theme})=> theme.colors.grey5};
  letter-spacing:${({theme})=> theme.spacings.spacing};
  margin-bottom: 0.5rem;
  font-size: 2rem;
  transition: ${({theme})=> theme.transitions.transition};
  border-radius: ${({theme})=> theme.radius.radius};
  :hover {
    background: ${({theme})=> theme.colors.primary9};
    color: ${({theme})=> theme.colors.primary5};
  }
  `
  const StyledNavBarList = styled.ul`
  a{
    font-size: 1rem;
  }
  ` 
  const tempLinks = data.map(link => {
    return (
      <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({type="navbar"}) => {
  const path = globalHistory.location.pathname
  return type === "sidebar" ? (
    <StyledSideBarList>
      {data.map(link => 
        path !== link.url ? (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ) : (
          <></>
        )
      )}
    </StyledSideBarList>
  ) : (
    <StyledNavBarList>{tempLinks}</StyledNavBarList>
  )
  }
  