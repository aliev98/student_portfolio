import React from "react"
import styled from "styled-components"

// Here we define the nav-buttons in the Jobs component

const StyledJobButton = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  letter-spacing: ${({ theme }) => theme.spacings.spacing};
  margin: 0.3rem 0.5rem;
  transition: ${({ theme }) => theme.transitions.transition};
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
  border-radius: 0;

  color: ${({ active, theme }) =>
    active ? theme.colors.primary5 : theme.colors.grey1};
  box-shadow: ${({ active, theme }) =>
    active && `0 2px ${theme.colors.primary5}`};

  &:hover {
    color: ${({ theme }) => theme.colors.primary5};
    box-shadow:  ${({ theme }) => `2px ${theme.colors.primary5}`};

  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;


    &:hover {
      box-shadow: ${({ theme }) => `-2px 0 ${theme.colors.primary5}`};
    }

    box-shadow: ${({ active, theme }) =>
      active && `-2px 0 ${theme.colors.primary5}}`};
  }
  }
`
/* // A JobButton can toggle between active and not active */

const JobButton = ({ active, render = Function.prototype, item }) => {
  return (
    <>
      <StyledJobButton onClick={render} active={active}>
        {item}
      </StyledJobButton>
    </>
  )
}

export default JobButton