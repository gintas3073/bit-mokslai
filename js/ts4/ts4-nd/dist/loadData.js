import { fetchRegistrations } from "./fetchData.js";
import { registrationData } from "./app.js";
import { showData } from "./showData.js";
export const loadData = () => {
    fetchRegistrations(`Registracija`, `GET`, null)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        // Object.keys(data)
        registrationData.splice(0, registrationData.length);
        Object.keys(data).forEach((k) => {
            // data[k].id=k  id priskyrimas
            registrationData.push(Object.assign({ id: k }, data[k]));
        });
        showData(registrationData);
        console.log(Object.keys(data));
    });
};
