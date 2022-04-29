import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//import { H1 } from "../components/Heading"
//import { Image } from "rebass"
//import { GatsbyImage } from "gatsby-plugin-image"

const BlogPost = ({ data }) => {
  const { title } = data.contentfulBlogPost

  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
    }
  }
`
