import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import ButtonLink from "../components/ButtonLink"
import SEO from "../components/SEO"
import styled from "styled-components"

// With the help of this template Gatsby will create a page for each blogpost

const StyledBlogTemplate = styled.section`
  background: ${({ theme }) => theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);

  padding: 2rem;
  h1,
  h2 {
    text-align: center;
  }
  ul {
    margin-top: 2rem;
    display: inline-block;
    li {
      background: ${({ theme }) => theme.colors.grey9};
      color: ${({ theme }) => theme.colors.grey5};
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      text-transform: uppercase;
    }
  }
  blockquote {
    background: ${({ theme }) => theme.colors.grey9};
    border-radius: ${({ theme }) => theme.radius.radius};
    padding: 1rem;
    line-height: 2;
    color: ${({ theme }) => theme.colors.primary5};
    margin: 2rem 0;
  }
  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: ${({ theme }) => theme.radius.radius};
  }
  img {
    width: 20rem;
    height: 20rem;
    margin: 3rem 0;
  }
  @media screen and (min-width: 992px) {
    padding: 5rem;
    img{
      width: 30rem;
    }
  }
  `
  
const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 80vw;
  }
`

const ComponentName = ({ data }) => {
  console.log(data)
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <StyledBlogTemplate>
        <ContentContainer>
          <article>
            <ReactMarkdown source={content} />
          </article>
          <ButtonLink to="/blog" name="Alla artiklar" center   />
        </ContentContainer>
      </StyledBlogTemplate>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
