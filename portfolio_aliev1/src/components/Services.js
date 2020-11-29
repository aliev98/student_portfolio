import React from "react"
import Title from "./Title"
import services from "../constants/services"
import OuterContentContainer from "./OuterContentContainer"
import InsidePart from "./InnerContentContainer"
import Service from "./Service"

/*
 This component defines the services section
 I always try to break down a component into smaller ones.
 Service is an example of that. Almost always when you map over 
 a piece of JSX you can create a component out of that.  
*/
const Services = () => {
  return (
    <OuterContentContainer grey>
      <Title title="Tjänster" />
      <InsidePart type="services">
        {services.map(({ id, icon, title, text }) => {
          return (
            <Service key={id} id={id} icon={icon} title={title} text={text} />
          )
        })}
      </InsidePart>
    </OuterContentContainer>
  )
}

export default Services
