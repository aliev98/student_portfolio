import React from "react"
import Title from "./other/Title"
import Blog from "./Blog"
import InsidePart from "./other/InnerSection"
import ButtonComp from "./other/ButtonComp"
import styled from "styled-components"


const StyledContainer = styled.section`
  padding: 5rem 0;
  background: ${({ theme, grey }) => grey && theme.colors.grey10};
`


const BlogsContainer = ({ children, grey }) => {
  return <StyledContainer grey={grey}>{children}</StyledContainer>
}

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <BlogsContainer>
      <Title title={title} />
      <InsidePart type="blogs">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </InsidePart>
      
      {showLink && <ButtonComp to="/blog" center name="Alla artiklar" />}
    </BlogsContainer>
  )
}

export default Blogs