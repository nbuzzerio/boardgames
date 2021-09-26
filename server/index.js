const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (pathname === 'api/checkers') {
            app.render(req, res, 'api/checkers', query)
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(PORT, (err) => {
        if (err) throw err;
        console.log(`Serving on port ${PORT}`);
    })
})