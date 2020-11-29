import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

/*
     I have created a button/link component 
     out of the global classes called 'btn' and 'center-btn'
     If it is centered or not has become a prop... 
*/

const StyledButtonLink = styled(props => <Link {...props} />)`

    text-transform: uppercase;
    background:  ${({ theme }) => theme.colors.primary5};;
    color:  ${({ theme }) => theme.colors.primary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${({ theme }) => theme.spacings.spacing};
    font-weight: 700;
    -webkit-transition: ${({ theme }) => theme.transitions.transition};
    transition: ${({ theme }) => theme.transitions.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.radius.radius};
    display: ${({ center }) => (center ? "block" : "inline-block")};
    width: ${({ center }) => center && "12rem"};
    text-align:  ${({ center }) => center && "center"};
    margin: ${({ center }) => center && "0 auto"};
    margin-top: ${({ center }) => center && "3rem"};
    /* margin: 1rem 0 2rem 0; */


  &:hover {
    color:${({ theme }) => theme.colors.primary1};
    background: ${({ theme }) => theme.colors.white};
  }

`

const ButtonLink = ({ center, to, name }) => {
  return (
    <StyledButtonLink to={to} center={center}>
      {name}
    </StyledButtonLink>
  )
} 

export default ButtonLink
