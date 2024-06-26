//Kintamajam prisiskiriam HTML objekta
//const skaiciuotiBtn=document.getElementById("skaiciuoti");

//Paimti vieną elementą HTML objektą, mygtuką 
const skaiciuotiBtn = document.querySelector("#skaiciuoti");
skaiciuotiBtn.className = "btn btn-secondary"
//Prisiskiriame ivedimo lauka
const kainaInp = document.querySelector("#kaina");

//Prisiskiriame isvedimo div
const rezultatasDiv = document.querySelector("#rez");

const pvmSelect = document.querySelector("#pvm");
const pokytisInput = document.querySelector("#pokytis");

const error = document.querySelector("#error");

//Paimti visus elemtus, grazinamas masyvas
//const skaiciuotiBtn=document.querySelectorAll(".btn-success");

/*
skaiciuotiBtn.forEach((b)=>{
    console.log( b.innerHTML);
})
*/

// Išjungiame mygtuką
skaiciuotiBtn.disabled = true;



skaiciuoti = () => {
    rezultatasDiv.innerHTML = kainaInp.value * (1 + (pvmSelect.value * pokytisInput.value / 100));
    kainaInp.value = '';
    skaiciuotiBtn.disabled = true;
}

//Įjungiame mygtuką
ijungtiMygtuka = () => {
    console.log(kainaInp.value);
    if (kainaInp.value == '' || isNaN(kainaInp.value)) {
        skaiciuotiBtn.disabled = true;
        skaiciuotiBtn.className = "btn btn-danger"
        error.innerHTML = "Įveskite skaičių"
        error.style.visibility = "visible";
        kainaInp.className = "form-control is-invalid";

    } else {
        skaiciuotiBtn.disabled = false;
        //error.innerHTML=""
        //error.style.visibility = "hidden";
        kainaInp.className = "form-control is-valid";
        skaiciuotiBtn.className = "btn btn-success"
    }

}

skaiciuotiBtn.onclick = skaiciuoti;
// Kai kažkoks elementas paspaudžiamas
//kainaInp.onclick=ijungtiMygtuka;

//kainaInp.onblur=ijungtiMygtuka;
/*
kainaInp.onfocus=()=>{
    console.log("focus");
}
*/
kainaInp.oninput = ijungtiMygtuka;