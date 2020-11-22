// import React from "react"
// import Title from "./Title"
// import services from "../constants/services"
// const Services = () => {
//   return (
//     <section className="section bg-grey">
//       <Title title="Tjänster" />
//       <div className="section-center services-center">
//         {services.map(service => {
//           //  destructure
//           const { id, icon, title, text } = service

//           return (
//             <article key={id} className="service">
//               {icon}
//               <h4>{title}</h4>
//               <div className="underline"></div>
//               <p>{text}</p>
//             </article>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Services

import React from "react"
import Title from "./Title"
import services from "../constants/services"
import OuterContentContainer from "./containers/OuterPart"
import InnerContentContainer from "./containers/InnerPart"
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
      <InnerContentContainer type="services">
        {services.map(({ id, icon, title, text }) => {
          return (
            <Service key={id} id={id} icon={icon} title={title} text={text} />
          )
        })}
      </InnerContentContainer>
    </OuterContentContainer>
  )
}

export default Services