import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"

// Here we define the contact page and make use of formspree

const ContactSectionStyling = styled.section`
  display: grid;
  place-items: center;
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
`

const ContactFormStyling = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.radius};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.lightShadow};
  transition: ${({ theme }) => theme.transitions.transition};
  width: 90vw;
  max-width: 35rem;

  :hover {
    box-shadow: ${({ theme }) => theme.shadows.darkShadow};
  }

  h3 {
    padding-top: 1.25rem;
    color: ${({ theme }) => theme.colors.grey5};
  }
`

const InputFieldsContainer = styled.div`
  padding: 1rem 1.5rem;
`
const InputStyling = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colors.grey10};
  border-radius: ${({ theme }) => theme.radius.radius};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.spacings.spacing};
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.grey1};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.spacings.spacing};
  }
`
const TextInputStyling = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colors.grey10};
  border-radius: ${({ theme }) => theme.radius.radius};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.spacings.spacing};
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.grey1};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.spacings.spacing};
  }
`

const ButtonStyling = styled.button`

display: block;
width: 100%;
padding: 1rem;
border-bottom-left-radius: ${({ theme }) => theme.radius.radius};
border-bottom-right-radius: ${({ theme }) => theme.radius.radius};
border-top-right-radius: 0;
border-top-left-radius: 0;
`

const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan" />
      <ContactSectionStyling>
        <ContactFormStyling>
          <h3>kontakta mig</h3>
          <form action="https://formspree.io/mqkgeqzd" method="POST">
            <InputFieldsContainer>
            
              <InputStyling
                type="text"
                placeholder="namn"
                name="name"
              />
              <InputStyling
                type="email"
                placeholder="epost"
                name="email"
              />
              <TextInputStyling
                name="message"
                rows="5"
                placeholder="meddelande"
              ></TextInputStyling>
            </InputFieldsContainer>
            <ButtonStyling type="submit">
              Kontakta mig
            </ButtonStyling>
          </form>
        </ContactFormStyling>
      </ContactSectionStyling>
    </Layout>
  )
}

export default contact