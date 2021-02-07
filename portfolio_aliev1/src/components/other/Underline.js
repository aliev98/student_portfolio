import React from "react"
import styled from "styled-components"

/* 
    A styled component that simply returns an underline
    It is used on different places on the website
*/

const UnderlineStyling = styled.div`

         width: ${({ hero }) => hero ? '30rem' : '5rem'};
         height: 0.25rem;
         background: ${({ theme }) => theme.colors.primary5};
         margin: ${({ hero }) => `0 ${hero ? "0" : "auto"} 1.25rem`};
`

export const Underline = ({hero}) => {
  return (<UnderlineStyling hero={hero}/>)
}