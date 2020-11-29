import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import OuterContentContainer from "./OuterContentContainer"
import InsidePart from "./InnerContentContainer"
import ButtonComp from "./ButtonLink"

// Here we define the blog section

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <OuterContentContainer>
      <Title title={title} />
      <InsidePart type="blogs">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </InsidePart>
      {showLink && <ButtonComp to="/blog" center name="Alla artiklar" />}
    </OuterContentContainer>
  )
}

export default Blogs
