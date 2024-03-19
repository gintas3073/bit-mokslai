let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);


let s = (a + b + c) / 2;
let area = (s * (s - a) * (s - b) * (s - c)) ** 0.5;

console.log(area);
