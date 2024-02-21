/*
OOP - "objektinis" programavimas
*/

class Car {
    constructor(brand, model, color, price) {
        // šis (objektas) - kontekstinis kintamasis
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.isEngineOn = false;
        this.isRadioOn = false;
        this.windowsHeight = [1, 1, 1, 1];
        this.tankSize = 40;
        this.tankLevel = 5;
    }

    turnOnEngine() {
        this.isEngineOn = true;
    }

    turnOffEngine() {
        this.isEngineOn = false;
    }

    fillTank(amount) {
        if (this.tankLevel + amount <= this.tankSize) {
            this.tankLevel += amount;
        } else {
            const diff = this.tankSize - this.tankLevel;
            this.tankLevel = this.tankSize;
            console.log(`Per daug, ipilta tik ${diff}`);
        }
    }
}

const audi = new Car('Audi', '80', 'red', 300);
const tesla = new Car('Tesla', 'Roadster 2', 'black', 100_000);

// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// audi.turnOnEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// tesla.turnOnEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// tesla.turnOffEngine();
// audi.turnOffEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

console.log('Talpa:', audi.tankSize);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(5);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel);
console.clear();
/*

Reikia class'es: Parrot

Savybes:
- vardas
- spalva
- amzius
- miega/nemiega

Functionalumas:
- gali pakartoti pasakyta zodi
    - jeigu miega, nereaguoja
    - jeigu pasakomas daugiau nei vienas zodis, tai pakartoja tik pirma zodi
- galima uzmigdyti
- galima pazadinti

*/

console.clear();

class Parot {
    constructor(name, color, age, price, notSleep) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.price = price;
        this.isSleeping = false;
        this.firstWord = sentence.join(' ')[0][0];
    }
    putToSleep() {
        this.isSleeping = true;
    }

    firstWord = sentence.spilt(' ')[0];

}

Jack.sentence = 'Eik namo';

const Jack = new Parot("Jack", "red", 48, 300);
console.log(Jack);

