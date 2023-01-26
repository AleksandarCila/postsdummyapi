# Blog Posts Demo for Dummy API

Check live [demo](https://inspiring-kulfi-4d505c.netlify.app/).

Basic Blog app that fetches data from [Dummy API](https://dummyapi.io/docs).
It consists of 4 pages:
    - Home page that displays all the blog posts with a pagination, click on each post takes you to a Post display page
    - Post display page shows data of only one post, with full length text and comments, and here you can add your own comments
    - Every post can be updated, from Post display page there is an Edit post button
    - In top right corner you can create a new post

Edit Post and Create New post share the same components, but depending on the function, it will create a new post or update the existing and redirect to the Home page.

All data fetching is done with [react-query](https://react-query-v3.tanstack.com/).

For component look and feel, styled-components are used.

Each fetching function is supported for loading, success and error states. Basic warnings are displayed with alert() for success or error.
