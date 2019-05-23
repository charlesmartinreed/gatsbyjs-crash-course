## What is Gatsby?

---

- Static site generator that uses React, GraphQL and NodeJS
- Really though, it's a React framework for building websites and web applications.
- Has a wide array of plugins for interfacing with other services (gatsby-file-system, gatsby-transform-remark for transforming .md into .html, gatsby-plugin-catch-links for translating non-React links)
- Also has plugins for interfacing CMSes like Contentful or Wordpress
- Uses GraphQL for data queries
- Has a CLI that generates the necessary components to build out our pre-fab site
- gatsby new [name_of_app][starter file url]
- Run server: gatsby develop

## How do I add a new page?

---

- Add the page file - about.js, for example - in the pages folder in your project.
- Inside the file, create a functional REACT component that returns the layout of your design and choosing
- the name is important because it becomes the path - index.js becomes index.html, which of course is the first page

## What about styling?

---

Universal styles can be found and edited from the layout.css file, located in the components folder of your project.

## A few notes on the blog system in this example

---

- We use GraphQL in order to grab the blog posts from the filesystem
