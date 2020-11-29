import React from "react"
import styled from "styled-components"
import { Underline } from "./Underline"

// This component will hold the content of one service card

const StyledService = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: ${({ theme }) => theme.radius.radius};
  text-align: center;
  -webkit-transition: ${({ theme }) => theme.transitions.transition};
  transition: ${({ theme }) => theme.colors.primary9};

  &:hover {
    background: ${({ theme }) => theme.colors.primary5};
    color: ${({ theme }) => theme.colors.primary9};
  }
  :hover p {
    color: ${({ theme }) => theme.colors.primary9};
  }
`
const Service = ({ id, icon, title, text }) => {
  return (
    <StyledService>
      {icon}
      <h4>{title}</h4>
      <Underline />
      <p>{text}</p>
    </StyledService>
  )
}

export default Service
