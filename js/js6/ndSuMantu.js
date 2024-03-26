
//1.     Masyvo Elementų Filtravimas: Sukurkite funkciją, kuri naudojant for ciklą iš masyvo 
//išrenka ir grąžina naują masyvą su elementais, kurie tenkina tam tikrą sąlygą.

const mas = [3, 6, 8, 11, -4, 15];
let masM = [];
for (let i = 0; i < mas.length; i++) {
    mas[i] >= 10 ? masM.push(mas[i]) : false;
}
console.log(masM);

//2.     Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis
//.Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės.

const mas1 = [3, 6, 8, 11, -4, 15, 11, 6];

function unikalus(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(unikalus(mas1));

//3.Objekto Gylis: Parašykite funkciją, kuri naudodama for in ciklą ir rekursiją, 
//grąžintų objekto gylį(kiek giliausiai objektas turi įdėtinius objektus).

/* const mas2 = [3, 6, 8, [11, 16, [2, 3], 5] - 4, 15, 11, 6];

console.log(mas2.length); */
// Agnes sprendimas
function findMaxDepth(obj) {
    let maxDepth = 0;

    function intoDeep(obj, depth) {
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                intoDeep(obj[key], depth + 1);
            }
        }
        if (depth > maxDepth) {
            maxDepth = depth;
        }
    }

    intoDeep(obj, 1);
    return maxDepth;
}

console.log(`Giliausias masyvas ${findMaxDepth(obj)} lygyje.`);


//4.Masyvo Atvirkštinis: Turite skaičių masyvą.Naudodami for ciklą, 
//sukurkite naują masyvą, kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai.

const mas4 = [3, 6, 15, 11, 6];
let masMM = [];
for (let i = 0; i < mas4.length; i++) {
    masMM.unshift(mas4[i]);
}
console.log(masMM);

// 5 Raktų Filtravimas Objekte: Turite objektą su daugybe savybių.Sukurkite funkciją,
// kuri naudojant for in ciklą, grąžina naują objektą, kuriame yra tik tas savybės,
// kurios tenkina tam tikrą sąlygą.

const stud = [
    {
        "vardas": "Antanas",
        "pavarde": "Antanaitis",
        "amzius": 16,
        "pazymiai": [8, 7, 5, 6, 9]
    },
    {
        "vardas": "Giedrė",
        "pavarde": "Giedraitė",
        "amzius": 31,
        "pazymiai": [7, 9, 8, 5]
    },
    {
        "vardas": "Mantas",
        "pavarde": "Mantaitis",
        "amzius": 29,
        "pazymiai": [9, 6, 7]
    }

]


const old = 30;
stud.forEach((s) => {
    s.amzius > old ? console.log(s.vardas, s.amzius) : false;

})

//6. Suminė Vertė Objekte: Turite objektą, kurio savybės yra skaičiai.
//Naudodami for in ciklą, apskaičiuokite visų objekto savybių sumą.

let vid = 0
stud.forEach((s) => {
    vid += s.pazymiai[s];
    return vid;
})
// 8
const newArray = Object.keys(prekesEur).map((key) => [key, prekesEur[key]]);

console.log(newArray);

// const newArray = Object.entries(prekesEur);
// console.log(newArray);



//9.Dinaminis Objekto Sudarymas: Naudodami for ciklą, sukurti objektą, 
//kurio raktai yra skaičiai nuo 1 iki n, o reikšmės - tie skaičiai pakelti kvadratu.
/* const mas9 = [3, 6, 15, 11, 6];
let masM2 = [];
for (let i = 0; i < mas9.length; i++) {
    masM2.push(mas4[i] ** 2);
}
console.log(masM2); */
/* 
//10.Sąlyginės Reikšmės Objekte: Turite objektą, kuriame saugomos 
įvairios vartotojų savybės(pvz., vardas, amžius, miestas).Sukurkite funkciją, 
kuri naudojant for in ciklą, pakeistų tam tikrų savybių reikšmes, 
jeigu jos tenkina nurodytą sąlygą(pvz., jeigu vartotojo amžius yra mažesnis nei 18, 
    pridėkite savybę pilnametis: false). */

stud.forEach((s) => {
    s.amzius < 18 ? console.log(`${s.vardas} nepilnametis`) : false;

})

function agelimmit {
    object[key].amzius < 18;
    object[key].pilnametis = false

}





