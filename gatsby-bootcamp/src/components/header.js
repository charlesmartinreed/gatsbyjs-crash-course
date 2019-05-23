import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        Code All the Things
      </h1>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
