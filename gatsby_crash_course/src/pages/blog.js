import React from "react"
import { Link } from "gatsby"

// get the query data by destructuring data from passed in props
// here's where we query our posts
const BlogPage = ({ data }) => (
  <div>
    <h1>Latest Posts</h1>

    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted By: {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <hr />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <hr />
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
export default BlogPage
