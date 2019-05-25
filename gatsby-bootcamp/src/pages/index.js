import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// why not use the anchor element? With Link, the content can be swapped out instantaneously, without the page reload.
// Page content is pre-loaded by Gatsby, along with other optimizations.

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hey.</h1>
      <h2>
        I'm <Link to="/about">Charles</Link>, an ambitious but ultimately
        unfocused man trying to navigate my way through life as a modern
        developer.
      </h2>
    </Layout>
  )
}

export default IndexPage
