const http = require('http');
const fs = require('fs');
const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html")
const contact = fs.readFileSync("./contact.html");

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    url = req.url;
    // console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    if (url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about)
    }
    else if (url == '/contact'){
        res.end(contact)
    }
    else{
        res.statusCode == 404;
        res.end("<h1>404 page not found</h1>")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})