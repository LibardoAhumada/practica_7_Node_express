const fs = require("fs");
const express = require("express");
const server = express();
server.use(express.json());


let koders = fs.readFileSync("koders.json");
//let koders = JSON.parse(kodersRead);



// Lista de koders
server.get("/koders", (request, response) => {
    response.json(koders);
});



// Agregar un koder
server.post("/koders", (request, response) => {
    koders.push(request.body);

    response.json({
        message: "Koder added",
        koders
    });
});

// Borrar un koder
server.delete("/koders/:name", (request, response) => {
    const koderExists = koders.find(
        (koder) => koder.name === request.params.name
    );

    if (!koderExists) {
        response.status(404);
        response.json({ message: "Koder not found" });
        return;
    }

    const newKoders = koders.filter(
        (koder) => koder.name !== request.params.name
    );
    koders = newKoders;

    response.json({ message: "Koder deleted", koders });
});

server.delete("/koders", (request, response) => { 
  koders = []
  response.json({message: "All koders deleted",koders})
});

server.listen(8080, () => {
    console.log("Server listening on port 8080");
});