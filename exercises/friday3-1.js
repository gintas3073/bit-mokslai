// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set


const languages = ['D', 'F', 'I', 'K'];
let threeMembers = [0];
for (let i = 0; i < 4; i++) {
    const r = Math.floor(Math.random() * 4);
    threeMembers.push(r);
}
let languages3 = [languages[threeMembers[0]], languages[threeMembers[1]], languages[threeMembers[2]]];
let msg = [];

if (languages[threeMembers[0]] === languages[threeMembers[1]] === languages[threeMembers[2]]) {
    msg = languages[threeMembers[0]];
} else if (languages[threeMembers[0]] === languages[threeMembers[1]] !== languages[threeMembers[2]]) {
    msg = languages[threeMembers[2]];
} else if (languages.threeMembers[0] === languages[threeMembers[2]] !== languages[threeMembers[1]]) {
    msg = languages[threeMembers[1]];
} else if (languages[threeMembers[2]] === languages[threeMembers[1]] !== languages[threeMembers[0]]) {
    msg = languages[threeMembers[0]];
} else (languages[threeMembers[0]] !== languages[threeMembers[1]] !== languages[threeMembers[2]]); {
    msg = languages.slice(threeMembers[1], 1);
    // let two = one.slice(threeMembers[1], 1);
    // msg = two.slice(threeMembers[2], 1);
}

console.log(languages3, msg);

const languages1 = ['Z', 'F', 'I'];
let threeMembers1 = [0];
for (let i = 0; i < 3; i++) {
    const r = Math.floor(Math.random() * 3);
    threeMembers1.push(r);
}
let languages32 = [languages1[threeMembers1[0]], languages1[threeMembers1[1]]];
let msg1 = [];
msg1 = threeMembers1[0] === threeMembers1[1] ? languages1[threeMembers1[0]] : languages1[threeMembers1[0, 0]];


console.log(languages32, msg1);
console.clear();
/* 1.     Duomenų Objektas: Sukurkite objektą, kuris saugotų
 jūsų mėgstamiausios knygos pavadinimą, autorių ir leidimo metus. 
Išveskite kiekvieną objekto savybę naudojant for in ciklą. */

const book = {
    title: 'Vilniaus pokeris',
    author: 'R Gavels',
    year: 1989,
}
console.log(`Mano megatamiausia knyga ${book.title}. Knyga parase ${book.author} ir ji buvo isleista ${book.year} metais.`)

/* 2. Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės,
 kiekviena reikšmė turėtų vartotojo vardą ir amžių. Naudodami for of ciklą, 
 išveskite kiekvieno vartotojo vardą ir amžių.
 */

const readers = [
    { name: 'jonas', age: 99 },
    { name: 'matyte', age: 88 },
    { name: 'petras', age: 77 },
    { name: 'ona', age: 39 }
];

for (let i = 0; i < readers.length; i++) {
    let reader = readers[i];
    console.log(`${reader.name} ${reader.age}`);
}

/* 3. Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija
apie įvairius produktus (pavadinimas, kaina, kategorija).
Parašykite funkciją, kuri naudojant for of ciklą grąžintų tik tuos produktus,
kurie priklauso tam tikrai kategorijai.
*/

const m = [
    { name1: 'saw', price1: 5, category: 'building' },
    { name1: 'pot', price1: 15, category: 'kitchen' },
    { name1: 'hammer', price1: 6, category: 'building' },
    { name1: 'knife', price1: 35, category: 'kitchen' },
]



const f = 'kitchen'
const mm = m.filter(m => m.category === f);
console.log(mm);




/* Objekto Kopijavimas: Parašykite funkciją, kuri naudojant for in
ciklą sukurtų objekto kopiją.
 */

const readersCopy = [];
for (let i = 0; i < readers.length; i++) {
    readersCopy.push(readers[i]);
}
console.log(readersCopy);

/* 5.     Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su įvairiomis savybėmis. 
Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto raktus, 
o kitame - reikšmes.
 */

const m2 =
    { name1: 'knife', price1: 35, category: 'kitchen' };

const dataKeys = Object.keys(m2);
const dataValues = Object.values(m2);

console.log(dataKeys);
console.log(dataValues);




/*  6. Masyvo Suma: Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą, 
apskaičiuokite masyvo skaičių sumą.
 */

const array11 = [2, 5, 7, 9];
let sum = 0
for (let i = 0; i < array11.length; i++) {
    sum += array11[i];
}
console.log(array11, sum);

/* 7.     Didžiausias Skaičius: Turite skaičių masyvą. Naudodami for ciklą,
 raskite didžiausią skaičių masyve.
 */

let big = array11[0];
for (let i = 0; i < array11.length; i++) {
    array11[i] < array11[i + 1] ? big = array11[i + 1] : false;
}
console.log(array11, big);

/* 8.     Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in ciklą,
 grąžina objekto savybių skaičių.
*/

const m3 =
    { name1: 'knife', price1: 35, category: 'kitchen' };

const dataKeys1 = Object.keys(m3);

console.log(dataKeys1.length);



/* 9.  Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, 
kuriuose yra vardas ir amžius. Naudodami for of ciklą, išveskite tik tuos vartotojus,
 kurių amžius yra didesnis nei 18.
 */
const p = [
    { name: 'jonas', age: 19 },
    { name: 'matyte', age: 18 },
    { name: 'petras', age: 17 },
    { name: 'ona', age: 39 }];

const adult = p
    .filter(p => p.age >= 18);
console.log(adult);

/* 10.  Objekto Savybių Keitimas: Turite objektą, kuriame saugomi įvairių žmonių amžiai.
 Naudodami for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.
 */

const adult1 = p
    .filter(p => p.age += 1);
console.log(adult1);


