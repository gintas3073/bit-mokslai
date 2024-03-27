const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const btn = document.getElementById("btn");
const list = document.getElementById("product_list");

//Kuriame saugomos prekes
let prekesKiekis = [];
let sarasas = [];


const addProduct = () => {
    prekesKiekis = {
        prekes: xInput.value,
        kiekis: yInput.value,
    }
    const newTask = document.createElement("li");
    newTask.className = "list-group-item";
    newTask.textContent = (`Preke:   ${prekesKiekis.prekes} Kiekis:  ${prekesKiekis.kiekis}`);
    list.appendChild(newTask);
    xInput.value = "";
    yInput.value = "";
    sarasas.push(prekesKiekis);
    console.log(sarasas);
    localStorage.setItem("tasks", JSON.stringify(sarasas))
}

btn.onclick = addProduct;