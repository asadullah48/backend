// const http = require("http");



// const server = http.createServer(function(req,res){
//     res.end("http server in on")
// })
// server.listen (3000)


const express = require("express")
const app = express()
app.get("/", function(req, res){
    res.send("home page of my express server")
})

app.get("/about", function(req, res){
    res.send("about page of my express server")
})



app.listen(5000)
