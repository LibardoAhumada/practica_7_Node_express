const fs = require("fs");
const koders = [
    {name: "libardo", email: "libardo@gmail.com", age: "45"},{name: "hugo", email: "hugo@gmail.com", age: "45"}, {name: "fulanito", email: "fulanito@gmail.com", age: "29"}];

const objString = JSON.stringify(koders);

fs.writeFileSync("koders.json", objString, "utf-8");