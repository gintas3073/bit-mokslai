import { Registration } from "./registration.js";
import {fetchRegistrations} from "./fetchData.js";
import {loadData} from "./loadData.js"


export const showData=(registrationData:Registration[])=>{
    let dataTableBody=<HTMLElement>document.getElementById("dataTableBody");
    dataTableBody.innerHTML="";
registrationData.forEach((reg)=>{
    const tr = document.createElement("tr");

    const tdVardas=document.createElement("td");
        tdVardas.innerHTML=reg.firstName;
    
        const tdPavarde=document.createElement("td");
        tdPavarde.innerHTML=reg.lastName;
    
        const tdGimimoMetai=document.createElement("td");
        tdGimimoMetai.innerHTML=reg.birthYear.toString();
   
        const tdV=document.createElement("td");
  tr.appendChild(tdVardas); 
  tr.appendChild(tdPavarde); 
  tr.appendChild(tdGimimoMetai); 
  tr.appendChild(tdV); 

dataTableBody.appendChild(tr);
tr.onclick=()=>{
    
    (<HTMLElement>document.getElementById("dataTable")).style.display="none";
    (<HTMLElement>document.getElementById("editForm")).style.display="block";
   
    (<HTMLInputElement>document.getElementById("firstNameEdit")).value=reg.firstName;
    (<HTMLInputElement>document.getElementById("lastNameEdit")).value=reg.lastName;
    (<HTMLInputElement>document.getElementById("birthYearEdit")).value=reg.birthYear.toString();
   //<HTMLInputElement>document.getElementById("genderEdit")).value=reg.gender;
    (<HTMLInputElement>document.getElementById("phoneEdit")).value=reg.phone;
    (<HTMLInputElement>document.getElementById("emailEdit")).value=reg.email;
    
    if (reg.gender=="vyras"){
(<HTMLInputElement>document.getElementById("maleEdit")).checked=true;
(<HTMLInputElement>document.getElementById("femaleEdit")).checked=false;
    }else{
(<HTMLInputElement>document.getElementById("maleEdit")).checked=false;
(<HTMLInputElement>document.getElementById("femaleEdit")).checked=true;
    }

    (<HTMLButtonElement>document.getElementById("updateRegistration")).onclick=()=>{
        const upReg:Registration={
    firstName:(<HTMLInputElement>document.getElementById("firstNameEdit")).value,
    lastName:(<HTMLInputElement>document.getElementById("lastNameEdit")).value,
    birthYear:(<HTMLInputElement>document.getElementById("birthYearEdit")).value,
    //gender:(<HTMLInputElement>document.getElementById("genderEdit")).value,
gender:(<HTMLInputElement>document.querySelector(`input[name="genderEdit"]:checked`)).value,
    phone:(<HTMLInputElement>document.getElementById("phoneEdit")).value,
    email:(<HTMLInputElement>document.getElementById("emailEdit")).value,
        }

    fetchRegistrations(`Registracija/${reg.id}`,`PUT`, upReg)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Irasas atnaujintas");
        console.log(data);
        (<HTMLElement>document.getElementById("dataTable")).style.display="block";
    (<HTMLElement>document.getElementById("editForm")).style.display="none";
   
       // loadData();
    })
    };
(<HTMLButtonElement>document.getElementById("deleteRegistration")).onclick=()=>{

                fetchRegistrations(`Registracija/${reg.id}`, "DELETE", null)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    (<HTMLElement>document.getElementById("dataTable")).style.display="block";
                    (<HTMLElement>document.getElementById("editForm")).style.display="none";
                    loadData();
                });
};

}
})
}