 const http = require("http")
 let server = http.createServer((req,res)=>{
     res.write("hahaha")
     res.end("heloworlld")
 })
 server.on('request',(req,res)=>{
     console.log("hello,wrold")
 })