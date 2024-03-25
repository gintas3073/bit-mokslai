
const fs = require("fs");
const input = fs.readFileSync(process.argv[2]).toString().split("\r\n");

let mas2d = [];
input.forEach((l) => {
    mas2d.push(l.split(" "));
});


