import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
export const showData = (registrationData) => {
    let dataTableBody = document.getElementById("dataTableBody");
    dataTableBody.innerHTML = "";
    registrationData.forEach((reg) => {
        const tr = document.createElement("tr");
        const tdVardas = document.createElement("td");
        tdVardas.innerHTML = reg.firstName;
        const tdPavarde = document.createElement("td");
        tdPavarde.innerHTML = reg.lastName;
        const tdGimimoMetai = document.createElement("td");
        tdGimimoMetai.innerHTML = reg.birthYear.toString();
        const tdV = document.createElement("td");
        tr.appendChild(tdVardas);
        tr.appendChild(tdPavarde);
        tr.appendChild(tdGimimoMetai);
        tr.appendChild(tdV);
        dataTableBody.appendChild(tr);
        tr.onclick = () => {
            document.getElementById("dataTable").style.display = "none";
            document.getElementById("editForm").style.display = "block";
            document.getElementById("firstNameEdit").value = reg.firstName;
            document.getElementById("lastNameEdit").value = reg.lastName;
            document.getElementById("birthYearEdit").value = reg.birthYear.toString();
            //<HTMLInputElement>document.getElementById("genderEdit")).value=reg.gender;
            document.getElementById("phoneEdit").value = reg.phone;
            document.getElementById("emailEdit").value = reg.email;
            if (reg.gender == "vyras") {
                document.getElementById("maleEdit").checked = true;
                document.getElementById("femaleEdit").checked = false;
            }
            else {
                document.getElementById("maleEdit").checked = false;
                document.getElementById("femaleEdit").checked = true;
            }
            document.getElementById("updateRegistration").onclick = () => {
                const upReg = {
                    firstName: document.getElementById("firstNameEdit").value,
                    lastName: document.getElementById("lastNameEdit").value,
                    birthYear: document.getElementById("birthYearEdit").value,
                    //gender:(<HTMLInputElement>document.getElementById("genderEdit")).value,
                    gender: document.querySelector(`input[name="genderEdit"]:checked`).value,
                    phone: document.getElementById("phoneEdit").value,
                    email: document.getElementById("emailEdit").value,
                };
                fetchRegistrations(`Registracija/${reg.id}`, `PUT`, upReg)
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    console.log("Irasas atnaujintas");
                    console.log(data);
                    document.getElementById("dataTable").style.display = "block";
                    document.getElementById("editForm").style.display = "none";
                    // loadData();
                });
            };
            document.getElementById("deleteRegistration").onclick = () => {
                fetchRegistrations(`Registracija/${reg.id}`, "DELETE", null)
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    document.getElementById("dataTable").style.display = "block";
                    document.getElementById("editForm").style.display = "none";
                    loadData();
                });
            };
        };
    });
};
