import React, { useState } from "react"
import { Navbar } from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

/*
  This is the main container-component to buid our pages with
  Every page will have as Nav, Footer and a Sidebar (mobile view). 
  We create local state and toggle functionality for the sidebar. 
*/
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
