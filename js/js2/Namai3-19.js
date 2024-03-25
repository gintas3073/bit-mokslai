/* /* /* // Uzduotis 1
console.log('Uzduotis #1');
const temp = [1, 2, 7, 3, 4, 6, -1, 2, 4, -3, -3, -5, 1, 5, 6, 7, 5, 9, 2, 3, 6, 7, 8, 6, 3, 6, 7, 5, 6, 7, 1];
let low = temp[0];
let high = temp[0];
let a;
let b;
for (let i = 0; i <= temp.length; i++) {
    if (temp[i] < low) {
        low = temp[i];
        a = i + 1;
    }
    if (temp[i] > high) {
        high = temp[i];
        b = i + 1;
    }
}
console.log(`The highest temperature was ${high}C on ${b}th day`);
console.log(`The towest temperature was ${low}C on ${a}th day`);

//Uzduotis 2
console.log('Uzduotis #2');
const num = [1, 2, 7, 3, 4, 6, 1, 2, 4];
for (let i = 0; i < 10; i++) {
    let m1 = 0;
    for (let k = 0; k < 9; k++) {
        if (i === num[k]) {
            m1++
        }
    }
    console.log(i, m1);
}
//Alternatyviai

const mas4 = Array(10).fill(0);

input.forEach((x) => mas4[x]++);
mas.forEach((d, x) => console.log(`[${i}]=>{d}`));
console.log(mas4);



// Uzduotis 3
console.log('Uzduotis #3');
const mas = [[11, 12, 13, 14],
[21, 22, 23, 24],
[31, 32, 33, 34],
[41, 42, 43, 44]
];

let mas1 = [];
let mas2 = [];
let mas3 = [];
for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
        mas1.push(mas[k][i]);
    }
    mas2 = mas1.slice(0);
    mas3.push(mas1.slice(0 + 4 * i, 4 + 4 * i))
}
console.log(mas);
console.log(mas3);


// kitas budas
for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `$mas[y][i]`;

    }
    console.log(s);
}

console.log("Uzduotis 3");
 */
/* const signal = [4, 7, 3, 5, 8];
const k = signal.length;
let avr = [];
for (let i = 0; i < k; i++) {
    if (i === 0) {
        avr.push(((signal[0] + signal[1]) / 2).toFixed(1));
    } else if (i < (k - 1)) {
        avr.push(((signal[i - 1] + signal[i] + signal[i + 1]) / 3).toFixed(1));
    } if (i === (k - 1)) {
        avr.push(((signal[k - 2] + signal[k - 1]) / 2).toFixed(1));
    }
}

console.log(signal, k);
console.log(avr);  */

const mas = [
    [1, 2, 2, 5],
    [5, 1, 4, 2],
    [2, 2, 1, 3],
    [2, 8, 9, 6]
];
//let masM = [];
const m = 3;

for (let i = 0; i < m; i++) {
    for (let k = 0; k < m; k++) {
        if (i === k) {
            mas.replace(0, 0, 0);
            //mas.replace([m - i][i], 0);
        }
    }
    console.log(mas);
}
