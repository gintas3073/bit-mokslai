import { userInfo } from "./app.js";

      export const fetchRegistrations=(path:string, method:string, data:any)=>{
        let options:any={
        method:method,
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
          };
         if (data!== null){
              options.body=JSON.stringify(data);
       }
    return fetch(`https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/${path}.json?auth=${userInfo.idToken}`, options);
      }