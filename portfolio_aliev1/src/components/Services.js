import React from "react"
import Title from "./other/Title"
import services from "../constants/services"
// import OuterContentContainer from "./OuterContentContainer"
import InsidePart from "./other/InnerSection"
import Service from "./Service"
import styled from "styled-components"


const ContainerStyling = styled.section`
  padding: 5rem 0;
  background: ${({ theme, grey }) => grey && theme.colors.grey10};
`

const ServicesContainer = ({ children, grey }) => {
  return <ContainerStyling grey={grey}>{children}</ContainerStyling>
}




const Services = () => {
  return (
    <ServicesContainer grey>
      <Title title="Tjänster" />
      <InsidePart type="services">
        {services.map(({ id, icon, title, text }) => {
          return (
            <Service key={id} id={id} icon={icon} title={title} text={text} />
          )
        })}
      </InsidePart>
    </ServicesContainer>
  )
}

export default Services
