import React from "react"
import styled from "styled-components"

/*
 I have turned the section class (. section in main.css) into this 
 container-component. I included a grey-prop to be able to 
 alternate between white and grey sections.
*/

const StyledOuterContentContainer = styled.section`
  padding: 5rem 0;
  background: ${({ theme, grey }) => grey && theme.colors.grey10};
`

const OuterContentContainer = ({ children, grey }) => {
  return <StyledOuterContentContainer grey={grey}>{children}</StyledOuterContentContainer>
}

export default OuterContentContainer;