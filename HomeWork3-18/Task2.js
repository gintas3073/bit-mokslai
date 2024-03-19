const olimpines1 = 1896;
let metai = Number(process.argv[2]);

const olimp = (metai - olimpines1);

console.log(olimp % 4 === 0 ? console.log(metai + " olimpiniai") : console.log(metai + " ne olimpiniai"));
console.log((olimp / 4).toFixed(0) + ' olimpiada');


