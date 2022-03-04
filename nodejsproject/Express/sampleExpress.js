
// APP.GET( get the data form the server) , APP.POST(will send the data to server ), APP.PUT(update the complete record ),
// APP.DELETE APP.PATCH (for update perticular row of the record ) this are the methods we have in express js 
// to interate with
// the server and host 
// http methods 

const express = require('express')
const app = express(); // here we are creating alias for express

app.get('/', (red,res)=>{

    res.send('hellow world')
})