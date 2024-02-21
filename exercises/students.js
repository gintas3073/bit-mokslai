const students = [
    { name: 'Jonas', age: 99, isMarried: true, marks: [10, 2, 8, 4, 6] },
    { name: 'Ona', age: 66, isMarried: true, marks: [7, 7, 7] },
    { name: 'Maryte', age: 88, isMarried: false, marks: [7, 6, 5, 4, 3] },
    { name: 'Petras', age: 77, isMarried: false, marks: [1] }
]

// Reikia apskaiciuoti kiekvieno studento pazymiu kieki ir tai prideti
//kaip nauja studento objekto rakta (marksCount).
for (student of students) {
    student.marksCount = student.marks.length;
    let sum = 0;
    for (const mark of student.marks) {
        sum += mark;
    }
    student.marksAverage = sum / student.marks.length;


    student.maxMark = student.marks.sort()[0];
    student.minMark = student.marks.sort((a, b) => a - b)[0];

}
console.log(students);

for (const student of students) {
    const name = (student.marksAverage > 5 ? student.name : false);

}

console.log(name);

// Reikia apskaiciuoti kiekvieno studento pazymiu vidurki ir tai prideti kaip nauja studento objekto rakta (marksAverage).
// Reikia rasti kiekvieno studento maziausia pazymi ir tai prideti
//kaip nauja studento objekto rakta (minMark).
// Reikia rasti kiekvieno studento didziausia pazymi ir tai prideti kaip nauja studento objekto rakta (maxMark).
// Reikia sudaryti studentu sarasa (pilni objektai), kuriu pazymiu vidurkis yra didesnis uz 5.
// Reikia sudaryti studentu vardu sarasa, kuriu pazymiu vidurkis yra didesnis uz 5.


// console.log(marks.length);
//console.log(students.map);




//const student = students.filter(ml => ml.marks.length);




//const s = `${student.name} ${student.age} ${student.isMarried} Marks:  ${student.marks}`;
// return s + `  MarksCount: ${student.marks.length}, Avarage: ${aver},`;


