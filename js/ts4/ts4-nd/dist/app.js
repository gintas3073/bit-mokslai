import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthYear = document.getElementById('birthYear');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const addRegistrationBtn = document.getElementById(`addRegistration`);
const loadDataButton = document.getElementById(`loadData`);
//const dataTableBody=<HTMLElement>document.getElementById(`dataTableBody`);
//const dataTable =<HTMLElement>document.getElementById("dataTable");
//const editForm =<HTMLElement>document.getElementById("editForm");
export const registrationData = [];
addRegistrationBtn.onclick = () => {
    const gender = document.querySelector('input[name="gender"]:checked');
    if (gender != null) {
        const reg = {
            firstName: firstName.value,
            lastName: lastName.value,
            birthYear: birthYear.value,
            gender: gender.value,
            phone: phone.value,
            email: email.value,
        };
    }
    else {
        const reg = {
            firstName: firstName.value,
            lastName: lastName.value,
            birthYear: birthYear.value,
            phone: phone.value,
            email: email.value,
        };
        fetchRegistrations(`Registracija`, `POST`, reg)
            .then((response) => {
            return response.json();
        })
            .then((data) => {
            console.log("Irasas pridetas");
            console.log(data);
        });
    }
};
loadDataButton.onclick = loadData;
loadData();
