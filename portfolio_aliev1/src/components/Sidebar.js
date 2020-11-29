import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components"

/* 
  Here we create the dropdown menu in the form of an sidebar
  I created an aside, but maybe that is not the correct semantic
  element in this case.
*/

const StyledSidebar = styled.aside`
  background: ${({ theme }) => theme.colors.grey10};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: ${({isOpen}) => isOpen ? "1" : "0"}; 
  transition: var(--transition);
  transform: ${({isOpen}) => isOpen ? "translateX(0)" : "translateX(-100%)"};
  
  @media screen and (min-width: 992px) {
      transform: translateX(-100%);
  }

`
const SidebarButton = styled.button`
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: ${({theme})=> theme.colors.grey1};
  cursor: pointer;
`

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <StyledSidebar isOpen={isOpen}>
      <SidebarButton onClick={toggleSidebar}>
        <FaTimes />
      </SidebarButton>
      {isOpen && <Links closeSidebar={toggleSidebar} type="sidebar" />}
      <SocialLinks />
    </StyledSidebar>
  )
}

export default Sidebar
