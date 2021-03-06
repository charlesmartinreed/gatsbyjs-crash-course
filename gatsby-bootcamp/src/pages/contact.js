import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>+1-222-333-4444</p>
      <p>charliefakemail@yahoo.com</p>
      <p>
        <a
          href="https://twitter.com/supalatecharlie"
          target="_blank"
          rel="noopener noreferrer"
          alt="Charlie's Twitter Page"
        >
          @supalatecharlie
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
