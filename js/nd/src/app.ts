import {  Nationalize } from "./nationalize.js";

// Iš DOM pasiimame HTML elementus
const nameInput=<HTMLInputElement>document.getElementById("name");


const getInfo=<HTMLButtonElement>document.getElementById("getInfo");
const resultList=<HTMLUListElement>document.getElementById("resultList");
const nameResult=<HTMLElement>document.getElementById("nameResult");



// Kai paspaudžia mygtuką gauti informacijai
getInfo.onclick=()=>{
    //Paimame įvestą vardą
    const vardas=nameInput.value;

    //Parsiunčiame duomenis
    fetch (`https://api.nationalize.io/?name=${vardas}`)
        .then((response)=>{
            // response - nėra gauti duomenys, o yra rezulto stream'as
            //console.log(response);
            // iškviečiame response metodą json kuris iš gauto stream'o konvertuos duomenis į objektą
            return response.json();
        })
        .then((data:Nationalize)=>{
            nameResult.innerHTML=data.name;
            resultList.innerHTML="";
            data.country.forEach((c)=>{
                const li=document.createElement('li');
                li.innerHTML=`${c.country_id} = ${(c.probability*100).toFixed(2)}%`;
                li.className='list-group-item';
                //Kiekvieną įrašą pridedame į ul sąrašą
                resultList.appendChild(li);
            });

        });
}