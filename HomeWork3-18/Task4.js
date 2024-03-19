let arm2 = 100;
for (let i = 100; i < 999; i++) {
    let nA = String(i).split("").map((num) => {
        return Number(num)
    });
    arm2 = (Number(nA[0]) ** 3 + Number(nA[1]) ** 3 + Number(nA[2]) ** 3);
    arm2 === i ? console.log('Armstrongo skaicius   ' + i) : false;

}

