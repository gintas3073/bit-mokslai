


/*
OBJECT - objektas
key-value struktura
*/

const name1 = 'Jonas';
const name2 = 'Maryte';
const name3 = 'Petras';
const name4 = 'Ona';

const age1 = 99;
const age2 = 88;
const age3 = 77;
const age4 = 66;

const isMarried1 = true;
const isMarried2 = false;
const isMarried3 = false;
const isMarried4 = true;

function intro(name, age, isMarried) {
    return `${name} (${age}): ${isMarried ? '' : 'not '}married.`;

    // return `Hi, my name is ${name}.I am ${isMarried ? '' : 'not '}married and I am ${age} years old.`;
}

console.log(intro(name1, age1, isMarried1));
console.log(intro(name2, age2, isMarried2));
console.log(intro(name3, age3, isMarried3));
console.log(intro(name4, age4, isMarried4));

const person1 = ['Jonas', 99, true];
const person2 = ['Maryte', 88, false];
const person3 = ['Petras', 77, false];
const person4 = ['Ona', 66, true];

function intro2(info) {
    const name = info[0];
    const age = info[1];
    const isMarried = info[2];

    return `${name} (${age}): ${isMarried ? '' : 'not '}married.`;
}

console.log(intro2(person1));
console.log(intro2(person2));
console.log(intro2(person3));
console.log(intro2(person4));

console.clear();

const empty = {};
console.log(empty);

console.clear();

const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    liaudyjeVadinama: 'bulka',
    'liaudyje-vadinama': 'bulka',
    'liaudyje vadinama': 'bulka',
};

console.log(car.brand);
console.log(car.model);
console.log(car.color);
console.log(car.liaudyjeVadinama);
console.log(car["liaudyje-vadinama"]);
console.log(car["liaudyje vadinama"]);

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const student2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};
const student3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
};
const student4 = {
    name: 'Ona',
    age: 66,
    isMarried: true,
};

function intro3(student) {
    return `${student.name} (${student.age}): ${student.isMarried ? '' : 'not '}married.`;
}

function intro4(student) {
    const name = student.name;
    const age = student.age;
    const isMarried = student.isMarried;

    return `${name} (${age}): ${isMarried ? '' : 'not '}married.`;
}


console.log(intro3(student1));
console.log(intro3(student2));
console.log(intro3(student3));
console.log(intro3(student4));