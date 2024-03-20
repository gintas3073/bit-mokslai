let suma = 0;
let kiekis = 0;
let tep = [3, 5, 7, 1, 1];

temp.forEach((x) => {
    suma += x
    kiekis++
});
console.log(suma / kiekis);



let temp = [[0, 5, 7, 3, 4, 5], [5, 6, 1, 4, 3, 6], [3, 6, 7, 8, 1, 4,]];

men.forEach((sav) => {
    let savSuma = 0;
    let savKiekis = 0;
    sav.forEach((diena) => {

        savSuma += diena;
        savKiekis++;
    })
    suma += savSuma;
    kiekis += savKiekis;
    console.log(savSuma / savKiekis);
})
console.log(suma / kiekis);


