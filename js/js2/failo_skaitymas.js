const fs = require('fs');
let data = fs.readFileSync('Book1.csv').toString().split(" ");
console.log(typeof data);


//fs.readFileSync(process.argv[2]).toString().split(" ");

// cia padauodamas duomenys is consoleje nurodyto filo
// node failo_skaitymas.js data1.csv
// node failo_skaitymas.js data2.csv
// Number paverciame stringa i Number

// Galima ir tiesiogiai paversi i Number
// fs.readFileSync(process.argv[2]).toString().split(" ").map(toNumber);
// let x = parseInt("5") gausime 5;
// arba
// let y = Number("5") paduodame konstruktoriu kuris objekta



/*
data.forEach((d) => {
    suma += Number(d)
    console.log(d);
 */

//console / log(data);

//padaryti stringus is dvimacio
//fs.readFileSync(process.argv[2]).toString().split("\r\n ").map(toNumber);
/* let line = 0;
let mas = 0;

data.forEach((d) => {
    console.log(typeof d);

    console.log();
    d.split(" ").forEach(x) => {

        console.log(x)
    }

})
console / log(data);
 */