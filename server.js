const {createServer} = require('node:http'); // Importiere createServer aus dem http-Modul
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});