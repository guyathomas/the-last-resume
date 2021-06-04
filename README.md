# The Last Resume

This application allows users to edit resumes inline, storing them in a consistent JSON structure that will allow them to change between resumes' seamlessly. The application is statically built to provide optimal SEO load times.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## TODO:
* Cache pages for longer, but bust on save resume
* Touch avatar to upload image
* Tap URL to copy resume link
* Make it easier to create more resumes
* Re-order timeline
* Script to backup hasura config