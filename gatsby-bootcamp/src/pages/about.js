import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Charles</h1>
      <p>
        I was born in the 20th Century, came of age in the same and have spent
        much of the 21st Century trying to determine whether or not there will
        be a 22nd. When I'm not being absurdly opaque, I like listening to music
        with the volume in my headphones set dangerously high.
      </p>
      <p>
        Interested in hiring me? <Link to="/contact">Give me a shout.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
