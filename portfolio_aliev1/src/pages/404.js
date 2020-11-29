import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import ButtonComp from "../components/other/ButtonComp"

// Our 404 page

const StyledErrorPage = styled.main`
  background: ${({ theme }) => theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
  text-transform: uppercase;
  h1{
  color: ${({ theme }) => theme.colors.primary1};
  margin-bottom: 2rem;
  }
`
const Error = () => {
  return (
    <Layout>
      <StyledErrorPage>
        <div >
          <h1>Oj, Något gick fel</h1>
          <ButtonComp to="/" name="Tillbaka hem"/>
        </div>
      </StyledErrorPage>
    </Layout>
  )
}

export default Error
