const ugisInput = document.getElementById("Ugis");
const svorisInput = document.getElementById("Svoris");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const x = ugisInput.valueAsNumber;
    const y = svorisInput.valueAsNumber;
    const bmi = (y / ((x / 100) ** 2)).toFixed(1);
    rez.innerHTML = `Jusu BMI: ${bmi}`
}
btn.onclick = skaiciuoti;

