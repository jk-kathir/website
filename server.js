const http = require('http')
const fs = require('fs')
const port = 8080

const server = http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/html'})
    fs.readFile('index.html',function(error,data){
    if (error){
        res.writeHead(404)
        res.write('error not found')
    } else{
        res.write(data)
    }
    res.end()
})
})

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});