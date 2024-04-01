//Pasiimam elementus iš HTML
const surnameInp = document.getElementById("surname");
const nameInp = document.getElementById("name");
const quantityInp = document.getElementById("quantity");
const addBtn = document.getElementById("add");
const resultList = document.getElementById("result");
const clearBtn = document.getElementById("clear");
const atlyginimaiList = document.getElementById("atlyginimai");
let products = [];

const saveProducts = () => {
    localStorage.setItem("products", JSON.stringify(products));
}



const loadProducts = () => {
    const lsProducts = localStorage.getItem("products");
    if (lsProducts != null) {
        products = JSON.parse(lsProducts);
        showProducts();
    }
}


const showProducts = () => {
    resultList.innerHTML = "";
    products.forEach((p, i) => {
        const productLi = document.createElement("li");
        productLi.className = "list-group-item";
        productLi.textContent = `${p.surname} ${p.name} (${p.quantity})`;
        resultList.appendChild(productLi);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "istrinti"
        deleteBtn.className = "btn btn-info float-end btn-sm"
        deleteBtn.onclick = () => {
            products.splice(i, 1);
            showProducts();
        }

        productLi.appendChild(deleteBtn);
    })
}

const addProduct = () => {
    //Paimame reiksmes is laukeliu
    const surname = surnameInp.value;
    const name = nameInp.value;
    const quantity = quantityInp.value;
    surnameInp.value = "";
    nameInp.value = "";
    quantityInp.value = "";
    products.push({
        surname: surname,
        name: name,
        quantity: quantity
    });
    showProducts();
    saveProducts();
    atlyginimaiList.text = "123";
    console.log(atlyginimaiList.text)
}

const clear = () => {
    products = [];
    saveProducts();
    showProducts();
}

addBtn.onclick = addProduct;
clearBtn.onclick = clear;

loadProducts();