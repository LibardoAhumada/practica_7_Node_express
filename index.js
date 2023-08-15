const express = require("express");
const server = express()
const fs = require("fs");
const { request } = require("http");
server.use(express.json())

server.get("/koders", (request, response) => {
    response.end("hola get")
})


server.post("/koders", (request, response) => {
    
    fs.appendFileSync()
    fs.writeFileSync("koders.json", contentAsObj, "utf-8")

})

const content = fs.readFileSync("koders.js", "utf-8");

const contentAsObj =(JSON.parse(content))
contentAsObj.push(request)

fs.unlinkSync()

fs.existsSync()



server.listen(8080, () => {
    console.log("server listening on port 8080")
})

