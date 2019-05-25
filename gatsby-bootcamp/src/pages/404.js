import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => (
  <Layout>
    <Head title="404!" />
    <h1>Whoops! This page is nowhere to be seen!</h1>
    <p>
      <Link to="/">Head back home to safety!</Link>
    </p>
  </Layout>
)

export default NotFound
