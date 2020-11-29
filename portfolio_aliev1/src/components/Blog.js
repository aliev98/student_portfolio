import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

// The component holds one blogpost card 

const StyledBlog = styled.article`
  display: block;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.grey10};
  border-radius: ${({ theme }) => theme.radius.radius};
  box-shadow: ${({ theme }) => theme.shadows.lightShadow};
  transition: ${({ theme }) => theme.transitions.transition};


:hover {
  box-shadow: ${({ theme }) => theme.shadows.darkShadow};
  transform: scale(1.02);
}

`

const StyledImage = styled ( props => <Image {...props} />)`
  border-top-left-radius: ${({ theme }) => theme.radius.radius};
  border-top-right-radius: ${({ theme }) => theme.radius.radius};
  height: 15rem;
  
  @media screen and (min-width: 576px) {
    height: 17.5rem;
  }

  @media screen and (min-width: 850px) {
    height: 13.75rem;
  }
`

const BlogCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
  h4 {
    color: ${({ theme }) => theme.colors.grey1};
  }
`
const Footer = styled.div`
 
    display: flex;
    justify-content: space-between;
    align-items: center;
  

  p {
    margin-bottom: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey5};
  }

  p:first-of-type {
    display: inline-block;
    background: ${({ theme }) => theme.colors.grey9};
    color: ${({ theme }) => theme.colors.grey5};
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.radius.radius};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <StyledBlog>
        {/* if image is not supplied, instead of breaking, dont show any image */}
        {image && <StyledImage fluid={image.childImageSharp.fluid} />}

        <BlogCard>
          {/* if title is not supplied, set a defualt title */}
          <h4>{title || "Artiklar"}</h4>
          <p>{desc}</p>
          <Footer>
            <p>{category}</p>
            <p>{date}</p>
          </Footer>
        </BlogCard>
        
      </StyledBlog>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Blog
