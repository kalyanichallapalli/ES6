const http = require('http')

http.createServer((req,res)=>{
   res.write("Hellow World")
   res.end();
}).listen(8080)