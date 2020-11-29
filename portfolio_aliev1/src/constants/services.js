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
    text: `Har jobbat en hel del med ASP.NET Core och Javascript, samt med databaser, windows forms och konsoll applikationer i C#`,
  },
  {
    id: 2,
    icon: <FaSketch style={iconStyle} />,
    title: "Backend/frontend",
    text: `Jag kan jobba med både back och frontend efter utbildningen.`,
  },
  {
    id: 3,
    icon: <FaAndroid style={iconStyle} />,
    title: "Låthemsida, todolista och winforms program",
    text: `Tidigare under utbildningen har jag skapat en hemsida i ASP.NET Core där man kan administera låtar. Jag har också tillsammans med några andra byggt en todo sida i Javascript där man kan kolla på saker man har tänkt att göra, samt kunna lägga till och ta bort sådana. Tidigare jobbade jag med windows forms applikationer i C# där jag skapade olika användbara program. `,
  },
]
