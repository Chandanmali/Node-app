//Create your own server

const http = require("http");
const fs = require("fs");

const PORT = 2000;  // WE CAN TAKE ANY PORT eg, 2000, 3000, 4000
const hostname = "localhost";

const home = fs.readFileSync("./home.html");
//const not = fs.readFileSync("./not.html");


const server = http.createServer((req, res) =>{    // parameter syntax (request, response, next) always in this order

      if (req.url === "/") {
          return res.end(home);
      }

      if (req.url === "/about") {
          return res.end("<h1>About Page</h1>");
      }

      if (req.url === "/contact") {
          return res.end("<h1>Contact Page</h1>");
      }

      if (req.url === "/service") {
          return  res.end("<h1>Service Page</h1>");
      }

      else{
          return  res.end("<h1>Page Not Found</h1>");
      }
       

});

server.listen(PORT, hostname, () => {   // make server and call them
      console.log(`server is working on http://${hostname}:${PORT})`);
});