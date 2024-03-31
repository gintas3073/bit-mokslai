//Pasiimam elementus iš HTML
const pavInp = document.getElementById("pav");
const vardInp = document.getElementById("vard");
const uzdInp = document.getElementById("uzd");
const addBtn = document.getElementById("add");
const resultList = document.getElementById("result");
const resultBendras = document.getElementById("bendrAtl");
const resultVidutinis = document.getElementById("vidAtl");
const clearBtn = document.getElementById("clear");

let workers = [];
const saveWorkers = () => {
    localStorage.setItems("workers", JSON.stringify(workers));
}
const loadWorkers = () => {
    const lsWorkers = localStorage.getItem("workers");
    //if (lsWorkers! = nul) {
    workers = JSON.parse(lsWorkers)
    showWorkers();
    //}
}

const showWorkers = () => {
    resultList.InnerHTML = "";
    workers.forEach((p, i) => {
        const workersLi = document.createElement("li");
        workersLi.classListName = "list-group-item"
        workersLi.textContent = `${p.surname}, ${p.name} (${p.salary})`
        resultList.appendChild(workersLi);
    })

}


const addWorker = () => {
    const surname = pavInp.value;
    const name = vardInp.value;
    const salary = uzdInp.value;
    pavInp.value = "";
    vardInp.value = "";
    uzdInp.value = "";
    workers.push({
        surname: surname,
        name: name,
        salary: salary
    });
    showWorkers();
    saveWorkers();
}
const clear = () => {
    workers = [];
    saveWorkers();
    showWorkers();
}
addBtn.onclick = addWorker;
clearBtn.onclick = clear;
loadWorkers();