import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created with plenty of{" "}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>{" "}
        and{" "}
        <span role="img" aria-label="beer emoji">
          🍺
        </span>{" "}
        by {author}, © 2019
      </p>
    </footer>
  )
}

export default Footer
