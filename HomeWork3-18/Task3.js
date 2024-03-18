let hour = Number(process.arg[2]);
let min = Number(process.arg[3]);
let sec = Number(process.arg[4]);
sec++
if (sec === 60) {
    min++
    sec = 0;
}
if (min === 60) {
    hour++
    min = 0;
}
if (hour == 24) {
    hour = 0
}
console.log(`It is: ${hour}h:${min}min:${sec}s`);

