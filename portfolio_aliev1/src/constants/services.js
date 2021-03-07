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
    title: "Systemutveckling.NET",
    text: `Har under utbildningen jobbat en hel del med ASP.NET Core. Jag har också sedan innan kunskaper om C# språket då jag har skapat olika windows forms och konsollapplikationer.  `,
  },
  {
    id: 2,
    icon: <FaSketch style={iconStyle} />,
    title: "App design",
    text: `Jag tycker det vore intressant att jobba med att utveckla mobila appar.`,
  },
  {
    id: 3,
    icon: <FaAndroid style={iconStyle} />,
    title: "Webbutveckling",
    text: `Har kunskaper om JQuery, Javascript och HTML/CSS. Jag har fått utveckla mina kunskaper inom dessa programmeringstekniker mycket under utbildningen.`,
  },
]
