const path = require("path")

// Were using this to generate our slug and each blog post

//onCreateNode, attach slug field to the node on creation
// SitePage is a data type in Gatsby that builds actual page
// MarkdownRemark is our markdown converted to HTML page
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // node's path module has a .basename method that can be used to get the filename and extension. With the second arg, we tell the method to strip out the ext type, leaving us with just the filename
    const slug = path.basename(node.fileAbsolutePath, ".md")

    // this adds the slug onto the markdown nodes
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Dynamically create pages from slugs in the gatsby nodes list
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  //2. Get markdown data using graphql function - this returns promise
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // iterate of all posts, use createPages on each of them
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      // component to render, path to page, what if anything should be passed
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
