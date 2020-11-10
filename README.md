# Torre Test

This project depicts the usage of 3 simple endpoints (Torre's API) to desing and create a simple application with the info retrived.

## Plan
- [x] Discover what information does the given endpoints return and in what format
- [x] Define what information could be of use and design the interfaces
- [x] Create landing page to extract the required information (Torre _username_) - index
- [x] Create main interface where the information is displayed - home/$username
- [x] Create a space to list opportunities /search?pid=$username
- [x] Create specific job view /search/$id?pid=$username
- [x] Allow travel back and forth between views.
- [ ] Manage sessions to stop using URL params.

## Start

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

This projects is developed using Nextjs, Reactjs and multiple react libraries; as for the hosting, it is done with Vercel which allows a faster deployment that other services (that i know of).

Vercel is deploying this project to multiple URLs:
- [Production Env](torre-test-nine.vercel.app)
- [Development Env](torre-test.jptabares.vercel.app)