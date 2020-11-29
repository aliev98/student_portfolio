import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import styled from "styled-components"

const StyledBlogContainer = styled.section`
  background: ${({ theme }) => theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
`

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
  
}) => {
  return (
    <Layout>
      <SEO title="Bloggen" description="Bloggsidan" />
      <StyledBlogContainer>
        <Blogs blogs={blogs} title="Alla artiklar" />
      </StyledBlogContainer>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(locale: "sv", formatString: "DD MMM YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
