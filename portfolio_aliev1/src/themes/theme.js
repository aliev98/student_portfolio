/*
  My themes file. In a next iteration I want to go through
  this and clean up things. I also want to add the mediaquery values
  to this theme file. 
  In addition, a further improvement would be to change all pixel values to rems... 
*/

export default {
  fonts: {
    primary: "Roboto, sans-serif",
    secondary: "Open Sans, sans-serif",
    code: "Roboto Mono, monospace",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
  colors: {
    primary1: "hsl(184, 91%, 17%)",
    primary2: "hsl(185, 84%, 25%)",
    primary3: "hsl(185, 81%, 29%)",
    primary4: "hsl(184, 77%, 34%)",
    primary5: "#2caeba",
    primary6: "hsl(185, 57%, 50%)",
    primary7: "hsl(184, 65%, 59%)",
    primary8: "hsl(184, 80%, 74%)",
    primary9: "hsl(185, 94%, 87%)",
    primary10: "hsl(186, 100%, 94%)",
    primary11: "#00306c",
    /* darkest grey - used for headings */
    grey1: "hsl(209, 61%, 16%)",
    grey3: "hsl(209, 34%, 30%)",
    grey4: "hsl(209, 28%, 39%)",
    /* grey used for paragraphs */
    grey5: "hsl(210, 22%, 49%)",
    grey8: "hsl(210, 31%, 80%)",
    grey9: "hsl(212, 33%, 89%)",
    grey10: "hsl(210, 36%, 96%)",
    greendark: "hsl(125, 67%, 35%)",
    reddark: "hsl(360, 67%, 44%)",
    redlight: "hsl(360, 71%, 66%)",
    white: "#fff",
  },
  transitions: {
    transition: "all 0.3s linear",
  },
  spacings: {
    spacing: "0.2rem",
  },
  radius: {
    radius: "0.25rem",
  },
  shadows: {
    lightShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    darkShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  },
  widths: {
    maxWidth: "1170px",
    fixedWidth: "700px",
  },
  // this is a general class / section
  // I need to look at this later - I don't think I use it actually
  section: {
    padding: "5rem 0",
  },
  // create generic values for setting minimal page heights
  // Also a candidate for a clean up - to do: check if you even use this
  nonIndex: {
    minHeight: "calc(100vh - 5rem - 9rem)",
    background: "hsl(210, 36%, 96%)",
  },
}
