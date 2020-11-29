import React from "react"
import styled from "styled-components"

/* 
    I will set the default width to 90vw, but create an option to
    set the width per Innercontainer manually. 
    This container is placed inside the OuterContentContainer 
    and under the Title-component.  
    Depending on the type of the section and on the screensize,
    we manipulate the grid in different ways. 
*/
const StyledInnerContainer = styled.div`
  width: ${({ width = "90vw" }) => width};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.widths.maxWidth};

  @media screen and (min-width: 576px) {
    display: ${({ type }) => type === "blogs" && "grid"};
    grid-template-columns: ${({ type }) =>
    type === "blogs" && "repeat(auto-fill, minmax(368px, 1fr))"};
    column-gap: ${({ type }) => type === "blogs" && "2rem"};
  }

  @media screen and (min-width: 676px) {
    display: ${({ type }) => type === "services" && "grid"};
    grid-template-columns: ${({ type }) => type === "services" && "1fr 1fr"};
    -webkit-column-gap: ${({ type }) => type === "services" && "2rem"};
    -moz-column-gap: ${({ type }) => type === "services" && "2rem"};
    column-gap: ${({ type }) => type === "services" && "2rem"};
  }
  
  @media screen and (min-width: 992px) {
    display: ${({ type }) =>
      (type === "services" || type === "jobs") && "grid"};
    width: ${({ type }) => (type === "jobs" ? "90vw" : "95vw")};
    grid-template-columns: ${({ type }) =>
      type === "services" ? "1fr 1fr 1fr" : type === "jobs" && "200px 1fr"};
    column-gap: ${({ type }) => type === "jobs" && "4rem"};
  }
`
const InnerContentContainer = ({ children, type, width }) => {
  return <StyledInnerContainer type={type} width={width}>{children}</StyledInnerContainer>
}

export default InnerContentContainer
