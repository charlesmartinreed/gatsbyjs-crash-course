// create and export the react component template for our blog pages
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// make query, export it to get access of slug
// setting up a dynamic query that takes slug value into account in order to render a specific page, using query arguments and variables
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

// query passed as prop
const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Blog
