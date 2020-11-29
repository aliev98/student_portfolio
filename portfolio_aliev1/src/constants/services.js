import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

// Hard coded services 

const iconStyle = {
  fontSize: "2rem",
  marginBottom: "1.5rem",
}
export default [
  {
    id: 1,
    icon: <FaCode style={iconStyle} />,
    title: "Frontend utveckling",
    text: `Jag har kunskap i bland annat JavaScript och React. Jag kan hjälpa er med att förbättra eller utveckla en frontend, någonting som jag 
    håller på med just nu vid ett företag. Jag tycker att hela processen är intressant med att 'översätta' komplex logik som ibland finns i 
    backend till en användarvänlig produkt i frontend.`,
  },
  {
    id: 2,
    icon: <FaSketch style={iconStyle} />,
    title: "Full stack utveckling",
    text: `Efter min studie är jag utbildad till fullstack utvecklare. Under utbildingen har jag lärt mig om bland annat databasutveckling, deployment 
    i molnet och vi fick lära oss om att sätta upp ett webbasserat system med hjälp av C#.Net (MVC) och Entity Framework.`,
  },
  {
    id: 3,
    icon: <FaAndroid style={iconStyle} />,
    title: "Testning",
    text: `Jag kan också hjälpa er med testning av mjukvara. Jag har lärt mig om test driven utveckling (TDD) och ska snart fördjupa mig vidare i testning och certifiering av mjukvara.`,
  },
]
