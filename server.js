/**
 * File created from https://github.com/hanford/next-offline#now-10
 */

const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    // handle GET request to /service-worker.js
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath) 
    }
    // We redirect old /d/ requests
    else if (pathname.slice(0, 3) === '/d/') {
      res.writeHead(302, {
        'Location': `/r#${pathname.slice(3)}`
      });
      res.end();
    }
    // Other
    else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
