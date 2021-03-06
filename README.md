## What is Gatsby?

---

- Static site generator that uses React, GraphQL and NodeJS
- Really though, it's a React framework for building websites and web applications.
- Has a wide array of plugins for interfacing with other services (gatsby-file-system, gatsby-transformer-remark for transforming .md into .html, gatsby-plugin-catch-links for translating non-React links)
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

- By default, Gatsby doesn't load in any stylesheets. Import it in a proper component, like layout.js.
- Gatsby does support css pre-processors like SASS, via plugins.
- Gatsby uses CSS Modules for ensuring local scope and avoiding namespace clashes; these are, in a nutshell, CSS encapsulated into JavaScript Objects that are imported as default modules in the component where the styling is used.

## What about data fetching?

---

- We use GraphQL in order to grab the blog posts from the filesystem
- IDEs for GraphQL are graphiql or playground, both of which are browser based
- When fetching from local data source, use the gatsby-source-filesystem plugin.
-
