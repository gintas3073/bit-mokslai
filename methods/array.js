/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

console.log([10, 2, 8, 4, 6][0]);
console.log([10, 2, 8, 4, 6][1]);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][3]);
console.log([10, 2, 8, 4, 6][4]);
console.log([10, 2, 8, 4, 6][5]);
console.log([10, 2, 8, 4, 6][-1]);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

marks[1] = 5;
console.log(marks);

marks[4] = 9;
console.log(marks);

marks[6] = 666;
console.log(marks);

marks[5] = 555;
console.log(marks);

console.clear();

const jonas = [];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

jonas.push(8);
console.log(jonas);

jonas.push(4, 6);
console.log(jonas);

jonas.push(1, 2, 3, 44, 55, 66);
console.log(jonas);

console.clear();

const maryte = [];
console.log(maryte);

maryte.unshift(10);
console.log(maryte);

maryte.unshift(2);
console.log(maryte);

maryte.unshift(8);
console.log(maryte);

maryte.unshift(4, 6);
console.log(maryte);

console.clear();

const petras = [10];
console.log(petras);

petras.push(2, 3);
petras.unshift(8, 9);
console.log(petras);

console.log(petras.pop());
console.log(petras);

console.log(petras.shift());
console.log(petras);

console.clear();

console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(1));
console.log([10, 2, 8, 4, 6].at(2));
console.log([10, 2, 8, 4, 6].at(3));
console.log([10, 2, 8, 4, 6].at(4));
console.log([10, 2, 8, 4, 6].at(5));
console.log([10, 2, 8, 4, 6].at(-1));
console.log([10, 2, 8, 4, 6].at(-2));
console.log([10, 2, 8, 4, 6].at(-3));
console.log([10, 2, 8, 4, 6].at(-4));
console.log([10, 2, 8, 4, 6].at(-5));

console.clear();

const vienas = [1, 1, 1];
const du = [2, 2, 2];
const trys = [3, 3, 3];

const vienasDu = vienas.concat(du);
console.log(vienasDu);

const vienasTrys = vienas.concat(trys);
console.log(vienasTrys);

const trysVienas = trys.concat(vienas);
console.log(trysVienas);

const trysVienasDu = trys.concat(vienas, du);
console.log(trysVienasDu);

const trysVienasDuXXX = trys.concat(5, vienas, 7, du, 9);
console.log(trysVienasDuXXX);

console.clear();

console.log([10, 2, 8, 4, 6].includes(5));
console.log([10, 2, 8, 4, 6].includes(8));
console.log([10, 2, 8, 4, 6].includes(10));
console.log([10, 2, 8, 4, 6].includes(2));

console.log([10, 2, 8, 4, 6].indexOf(5));
console.log([10, 2, 8, 4, 6].indexOf(8));
console.log([10, 2, 8, 4, 6].indexOf(10));
console.log([10, 2, 8, 4, 6].indexOf(2));

console.clear();

const john = ['j', 'jay', 'jail', 'join', 'joint'];
console.log(john);
console.log(john.join());
console.log(john.join(''));
console.log(john.join(', '));
console.log(john.join('-'));
console.log(john.join('-=-'));

console.clear();

const abc = ['a', 'b', 'c', 'd'];
console.log(abc);

abc.reverse();
console.log(abc);

abc.reverse();
console.log(abc);

console.clear();

const ona = ['suo', 'kate', 'papuga', 'ziurkenas', 'sinsila'];

console.log(ona.slice());
console.log(ona.slice(2));
console.log(ona.slice(2, 3));
console.log(ona.slice(1, -1));

/*
UZD 1
Duodamas tekstas, kuris turetu buti kaip vardas.
Bet jis suformatuotas padrikai...
Reikia duota teksta suformatuoti taip, jog butu
tvarkingas vardas.

pvz.: jonas -> Jonas
pvz.: oNA -> Ona
pvz.: PeTrAs -> Petras
pvz.: Maryte -> Maryte
*/

/*
UZD 2
Duodamas vardas ir pavarde.
Grazinti trumpini (inicialai).

pvz.: Chuck Norris -> C.N.
*/

console.clear()

function formatName() {
    return = 0


}
console.log(formatName('jonas'), "->" 'Jonas');

const1 = 'joNaS';
lower1 = const1.toLowerCase();
upper1 = const1[0].toUpperCase();
slice1 = lower1.slice(1);
vardas1 = upper1 + slice1;

console.log(vardas1);
console.log(const1[0].toUpperCase() + (const1.toLowerCase().slice(1)));

const2 = 'Chuck Norris';
split2 = const2.split(' ');
vardas2 = split2[0];
pavarde2 = split2[1];