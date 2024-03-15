//1. Sukurti du kintamuosius. Jiems priskirti savo mylimo 
//aktoriaus vardą ir pavardę kaip stringus 
//(Jonas Jonaitis). Atspausdinti trumpesnį stringą.

const vardas = 'Chuckaaaa';
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
  */
function string() {
    let result1 = "";
    for (let i = 0; i < 3; i++) {
        const index1 = String.fromCharCode(Math.floor(Math.random() * 27 + 97));
        result1 += index1;
    }
    return result1
}
const randomStr = string();
console.log(randomStr);
console.clear();
//1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir 
//grąžina pasveikinimo žinutę.

const name1 = 'Chuck';

console.log(`My name is ${name1} and I weelcome all.`);


//2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.

const a1 = 8;
const b1 = 11;
const sum = a1 + b1;
console.log(sum);

//3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.

const aa1 = [1, 2, 3, 4, 5];


let sum1 = 0;

for (let i = 0; i < aa1.length; i++) {
    sum1 += aa1[i];

}
console.log('SUMA:', sum1);

//4.  Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.

const highWalue = aa1.sort((a, b) => b - a);

console.log(highWalue[0]);

//5.Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.

const text1 = "As darau namu darbus";

console.log(text1.length);

//6.: Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.

const numberX = 6;
let factorial = 0;
for (let i = 1; i <= numberX; i++) {
    factorial += i;

}
console.log(`'Factorial' ${factorial}`);

//7.Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.

const numberLimit = 3;
const highNumbers = aa1.filter(n => n >= numberLimit);
console.log(highNumbers);

//8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.

const text2 = 'Chuck Norris is ready to fight';
const spiltText = text2.split(' ');
console.log(spiltText);

const textReverse = spiltText.reverse();
console.log(textReverse);

const textReverseJoin = textReverse.join(',');
console.log(textReverseJoin);

const textJoin = textReverseJoin.replace(',', ' ');
console.log(textJoin);


//9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.


//10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra 
//lyginis, ir false, jei skaičius yra nelyginis.

const number3 = 23;

const isItEven = (number3 % 2) === 0 ? 'true' : 'false';
console.log(`the number is ${isItEven}.`);


//11.  Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį.Funkcija grąžina naują tekstą su pakeistais simboliais.


//12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.


//13. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.

const number33 = 7;
let checkNumber = 0
for (let i = 2; i < number33; i++) {
    checkNumber = number33 % i === 0 ? 'false' : 'true';
};

console.log(`The number ${number33} is ${checkNumber} prime number.`);


// 15.  Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą.

const seq11 = [1, 22, 5, 8, 9, 11, 5];
const lowLimmit = 2;
const highLimmit = 10;

const lowValues = seq11.filter(n => n <= highLimmit);
const highValues = lowValues.filter(n => n >= lowLimmit);
let sumOfValues = 0
for (let i = 0; i <= highValues.length; i++) {
    sumOfValues += highValues;
}

console.log(highValues, sumOfValues.length);

//19.Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.

text2

const letter1 = 'r'


let repeat = 0;
for (let i = 0; i <= text2.length; i++) {
    text2[i] === letter1 ? repeat++ : repeat += 0;
}

console.log(text2.length, repeat);

//20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.

const m1 = [3, 55, 5, 66, 88, 3, 55];
const m2 = [3, 55, 44, 4, 99, 2];
const m3 = [6, 9, 55, 66];

let m1m2 = [];
for (let i = 0; i <= m1.length; i++) {
    m1m2.push(m2.filter(n => n === m1[i]));
}
console.log(m1m2);



