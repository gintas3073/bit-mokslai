"use strict";
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthYear = document.getElementById('birthYear');
const gender = document.querySelector('input[name="gender"]:checked');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const addRegistrationBtn = document.getElementById(addRegistration);
addRegistrationBtn.onclick = () => {
    const reg = {
        firstName: firstName.value,
        lastName: lastName.value,
        birthYear: birthYear.value,
        gender: gender.value,
        phone: phone.value,
        email: email.value
    };
    fetch("https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/registrations.json", {
        method: "POST",
        headers: {} `Accept`
    } `application/json`, `Content-Type`, `application/json`);
},
    body;
JSON.stringify(reg);
then((response) => {
    return response.json();
})
    .then((data) => {
    console.log("Irasas pridetas");
    console.log(data);
});
// Išvalyti formą
document.getElementById('childForm').reset();
;
/script>;
