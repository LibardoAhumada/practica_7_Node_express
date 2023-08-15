const fs = require("fs");

const content = fs.readFileSync("Koders.json", "utf-8");
const contentAsObject = JSON.parse(content);

server.post(contentAsObject, (request, response) => {
    contentAsObject.push(request.body);
    fs.writeFileSync("Koders.json", JSON.stringify(contentAsObject));
    response.json(contentAsObject);
});





