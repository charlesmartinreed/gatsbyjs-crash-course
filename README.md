## What is Gatsby?

---

- Static site generator that uses React
- Has a wide array of plugins for interfacing with other services (gatsby-file-system, gatsby-transform-remark for transforming .md into .html, gatsby-plugin-catch-links for translating non-React links)
- Uses GraphQL for data queries
- Has a CLI that generates the necessary components to build out our pre-fab site
- gatsby new [name_of_app]
- Run server: gatsby develop

## How do I add a new page?

---

- Add the page file - about.js, for example - in the pages folder in your project.
- Inside the file, create a functional REACT component that returns the layout of your design and choosing

## What about styling?

---

Universal styles can be found and edited from the layout.css file, located in the components folder of your project.

## A few notes on the blog system in this example

---

- We use GraphQL in order to grab the blog posts from the filesystem
