let a = Number(process.arg[2]);
let b = Number(process.arg[3]);
let c = Number(process.arg[4]);


let s = (a + b + c) / 2;
let area = (s * (s - a) * (s - b) * (s - c)) ** 0.5;

console.log(area);
