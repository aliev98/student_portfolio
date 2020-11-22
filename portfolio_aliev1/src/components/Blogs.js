import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import styled from "styled-components"
import InnerContentContainer from './containers/InnerPart'
import OuterContentContainer from './containers/OuterPart'

//Outside container____________________________________



//_______________________________________________________

//Inner container________________________________________


//________________________________________________________

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <OuterContentContainer>
      <Title title={title} />
      <InnerContentContainer type="blogs">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </InnerContentContainer>
      {/* {showLink && <ButtonLink to="/blog" center name="Alla artiklar" />} */}
      {showLink && (<Link to="/blog" className="btn center-btn">Alla artiklar</Link>)}
    </OuterContentContainer>
  )
}

export default Blogs
