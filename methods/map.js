const marks = [10, 2, 8, 4, 6];
const doubleMarks = [];

// for (let i=0; i<marks.length; i++) {
//     const number = marks[i];
//     doubleMarks.push(number * 2);
// }

for (const number of marks) {
    doubleMarks.push(number * 2);
}

console.log(marks);
console.log(doubleMarks);

const tripleMarks = marks.map(number => number * 3);
console.log(tripleMarks);

console.clear();

// Jeigu skaicius teigiamas, palikti koks yra
// Jeigu skaicius neigiamas - padauginti is 10
const randomNumbers = [10, -2, 3.14, 8.77, 444444, -66.6];
const randomNumbers2 = [];

for (const number of randomNumbers) {
    randomNumbers2.push(number > 0 ? number : number * 10);
}

console.log(randomNumbers);
console.log(randomNumbers2);

const rn3 = randomNumbers.map(n => n > 0 ? n : n * 10);
console.log(rn3);