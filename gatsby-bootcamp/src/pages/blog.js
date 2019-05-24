import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog Entries</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <h2>
              <Link to={`/blog/${post.node.fields.slug}`}>
                {post.node.frontmatter.title}
              </Link>
            </h2>
            <p>{post.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
