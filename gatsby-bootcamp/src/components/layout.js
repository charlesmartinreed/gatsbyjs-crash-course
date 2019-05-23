import React from "react"
import Header from "./header"
import Footer from "./footer"
// by using the children prop, we take the elements rendered in a given component and display them inside of the component
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
