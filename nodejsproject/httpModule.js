const http = require('http') //core modules 
const url = require('url')

http.createServer((req,res)=>{
   let page = url.parse(req.url).pathname;
   console.log(page)
     if(page=='/'){
        res.write('welcomw to the node js  world')
     }else if (page=='./about'){
        res.write('welcome to about page')
     }else if(page=='./product'){
        res.write('welcome to product page') 
     }
   res.end();
}).listen(8080)