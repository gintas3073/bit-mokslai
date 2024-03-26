import fs from "fs";
//const fs = require("fs");
let str = fs.readFileSync('stud.json').toString();

const st = JSON.parse(str);
let amziaus = 0;
console.log('Sudentas........pazymiu vidurkis');

st.forEach((s) => {
    //console.log(s.vardas, s.pazymiai)
    amziaus += s.amzius
    let vid = 0;
    let leg = 0;
    s.pazymiai.forEach((v) => {
        let leg = s.pazymiai.length
        vid += v;
        return vid;
    })

    console.log(s.vardas, s.pavarde, (vid / s.pazymiai.length).toFixed(1));
    return amziaus;
})
console.log('-------------------')
console.log(`Grupeje yra ${st.length} studentu`);
console.log(`Studentu amziaus vidurkis ${amziaus / st.length}`);
