import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>+1-222-333-4444</p>
      <p>charliefakemail@yahoo.com</p>
      <p>
        <a
          href="https://twitter.com/supalatecharlie"
          target="_blank"
          alt="Charlie's Twitter Page"
        >
          @supalatecharlie
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
