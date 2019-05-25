// create and export the react component template for our blog pages
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// make query, export it to get access of slug
// setting up a dynamic query that takes slug value into account in order to render a specific page, using query arguments and variables
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// pass the json to the contentful library for rendering rich text to React component
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      age: publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`

// query passed as prop
const Blog = props => {
  // pass this to the documentToReactComponents method to dictate how assets are rendered
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    // <Layout>
    //   <h1>{props.data.markdownRemark.frontmatter.title}</h1>
    //   <p>{props.data.markdownRemark.frontmatter.date}</p>
    //   <div
    //     dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
    //   />
    // </Layout>
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>
        {props.data.contentfulBlogPost.publishedDate} |{" "}
        {props.data.contentfulBlogPost.age}
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </p>
    </Layout>
  )
}

export default Blog
