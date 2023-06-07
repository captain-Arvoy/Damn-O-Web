import http from 'http'

const host = 'localhost';
const port = 3001;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
  
  // Write the response content
    if(req.url == '/'){

      res.end("<h1> PROTOTYPE SERVER BUILT</h1>");
    } 
  });
server.listen(port,()=>{
  console.log(`listening on  port= ${port}`);
})



