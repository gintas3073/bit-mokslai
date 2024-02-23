//1. Sukurti du kintamuosius. Jiems priskirti savo mylimo 
//aktoriaus vardą ir pavardę kaip stringus 
//(Jonas Jonaitis). Atspausdinti trumpesnį stringą.

const vardas = 'Chuck';
const pavarde = 'Norris';
const short = vardas.length <= pavarde.length ? vardas : pavarde;



console.log(short);

/*
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, 
gimimo metus ir šiuos metus(nebūtinai tikrus).Parašykite kodą, 
kuris pagal gimimo metus paskaičiuotų jūsų amžių ir 
naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį:
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
*/

const name = 'Chuck';
const surname = 'Norris';
const dateOfBirth = 1960;
const thisYear = 2024;

const age = thisYear - dateOfBirth;

console.log(`Aš esu ${name} ${surname}.Man yra ${age} metai.`);

/*

Sukurti du kintamuosius.Jiems priskirti savo mylimo aktoriaus 
vardą ir pavardę kaip stringus.Sukurti trečią kintamąjį ir jam priskirti 
stringą, sudarytą iš trijų paskutinių vardo 
ir pavardės kintamųjų raidžių.Jį atspausdinti.
*/

const name2 = 'Chuck';
const surname2 = 'Norris';
const mockName = name2.slice(name2.length - 3) + surname2.slice(surname2.length - 3);

console.log(`Aš esu ${name} ${surname}. Kiti mane vadina '${mockName}'`);


/*Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
Jame visas “o” (didžiąsias ir mažąsias) 
pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/


const hollywood = 'Once upon a time in hollywood'.toLowerCase();

const star = hollywood.replaceAll('o', '*');

console.log(star);

/* Sukurkite keturis kintamuosius kuriems sugeneruokite 
atsitiktines reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. */


/*function numbers() {
    let i = 0;

    for (let i = 1; i <= 4; i++) {
        const randomNumbers = Array.floor(random * 3).fill(0);
    }

}
console.log(numbers);
*/
function random_0_2() {
    return Math.floor(Math.random() * 3);
}
const count5 = Array(4).fill(0);
for (let i = 0; i < 3; i++) {
    const r = random_0_2();
    count5[r]++;
}
const how = count5.filter(n => n === 0).length;
const heh = count5.filter(n => n === 1).length;
const huh = count5.filter(n => n === 2).length;
console.log('Kiek yra 0:', how, 'Kiek yra 1:', heh, 'Kiek yra 2:', huh);
//const how = count5.filter(n => n === 1).length;
console.log(count5);

/* Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. 
Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite 
atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio. */

const a = Math.floor(Math.random() * 5);
const b = Math.floor(Math.random() * 5);

const c = a >= b ? a / b : b / a;
const d = ((c * 100) - c % (c * 100)) / 100;
console.log(c, d);

console.clear();
/* #5/7 Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite 
atsitiktines reikšmes nuo 0 iki 25.
Raskite ir atspausdinkite vidurinę reikšmę. */

const a2 = Math.floor(Math.random() * 26);
const b2 = Math.floor(Math.random() * 26);
const c2 = Math.floor(Math.random() * 26);

console.log((a2 + b2 + c2) / 3);





/* #8 Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę
 kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš
  pirmų vardo ir pavardės kintamųjų raidžių. 
Jį atspausdinti. */

const a5 = 'Jonas';
const b5 = 'Dammas';
const c5 = a5[0] + '.' + b5[0] + '.';

console.log(c5);

/* Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. 
Stringo ilgis 3 simboliai.
  

for (let i = 0; i < 3; i++) {
    const rr = [];
    rr.push(String.fromCharCode(Math.floor(Math.random() * 25 + 97)));

;
}


console.log(rr);
//console.log(String.fromCharCode(s));
*/

function generateRandomString(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}
const randomString = generateRandomString(3);
console.log(randomString);