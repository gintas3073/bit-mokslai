


    const firstName = <HTMLInputElement>document.getElementById('firstName');
    const lastName = <HTMLInputElement>document.getElementById('lastName');
    const birthYear = <HTMLInputElement>document.getElementById('birthYear');
    const gender = <HTMLInputElement>document.querySelector('input[name="gender"]:checked');
    const email = <HTMLInputElement>document.getElementById('email');
    const phone = <HTMLInputElement>document.getElementById('phone');
    const addRegistrationBtn =<HTMLButtonElement>document.getElementById(addRegistration)
    
    addRegistrationBtn.onclick=()=>{
const reg:Registration={
   firstName:firstName.value,
    lastName:lastName.value,
    birthYear:birthYear.value,
   gender:gender.value,
    phone:phone.value,
    email:email.value

    }
    fetch("https://registracija-73e47-default-rtdb.europe-west1.firebasedatabase.app/registrations.json",{
        method:"POST",
        headers:{
            `Accept`:`application/json`,
            `Content-Type`:`application/json`
        },
        body:JSON.stringify(reg);
    })
    
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Irasas pridetas");
        console.log(data);

    })
}





    // Išvalyti formą
    document.getElementById('childForm').reset();
  });
</script>