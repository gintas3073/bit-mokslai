import { loginExec, registerExec } from "./auth.js";
import { Registration } from "./registration.js";
import {fetchRegistrations} from "./fetchData.js"
import {showData} from "./showData.js"
import { loadData } from "./loadData.js";

    const firstName = <HTMLInputElement>document.getElementById('firstName');
    const lastName = <HTMLInputElement>document.getElementById('lastName');
    const birthYear = <HTMLInputElement>document.getElementById('birthYear');
    const email = <HTMLInputElement>document.getElementById('email');
    const phone = <HTMLInputElement>document.getElementById('phone');
    const addRegistrationBtn =<HTMLButtonElement>document.getElementById(`addRegistration`);
    const loadDataButton=<HTMLButtonElement>document.getElementById(`loadData`);
    //const dataTableBody=<HTMLElement>document.getElementById(`dataTableBody`);
       
       //const dataTable =<HTMLElement>document.getElementById("dataTable");
       //const editForm =<HTMLElement>document.getElementById("editForm");
    
export const registrationData:Registration[]=[];
       

addRegistrationBtn.onclick=()=>{
    const gender = <HTMLInputElement>document.querySelector('input[name="gender"]:checked');
    if (gender!=null){
   const reg={
    firstName:firstName.value,
    lastName:lastName.value,
    birthYear:birthYear.value,
    gender:gender.value,
    phone:phone.value,
    email:email.value,
   }
    }else{
        const reg={
    firstName:firstName.value,
    lastName:lastName.value,
    birthYear:birthYear.value,
    phone:phone.value,
    email:email.value,
    }

    fetchRegistrations(`Registracija`,`POST`, reg)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Irasas pridetas");
        console.log(data);

    })
}

}

export const userInfo={
    email:"",
    idToken:"",
    loggedin:false,
};

// Paslėpiame duomenų sekciją ir įjungiame rodyti prisijungimo sekciją
(<HTMLElement>document.getElementById("loginSection")).style.display="block";
(<HTMLElement>document.getElementById("dataSection")).style.display="none";
(<HTMLElement>document.getElementById("loginError")).style.display="none";

//Registracijos URL
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZuYggKgrCTnZfT9yn6NIeRFV0LmgY8tg

//Prisijungimui URL
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZuYggKgrCTnZfT9yn6NIeRFV0LmgY8tg


loadDataButton.onclick=loadData;

// Mygtukam login ir register priskiriame f-jas iš auth.ts failo
(<HTMLButtonElement>document.getElementById("login")).onclick=loginExec;
(<HTMLButtonElement>document.getElementById("register")).onclick=registerExec;


 