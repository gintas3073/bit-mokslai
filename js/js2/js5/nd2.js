let x = 1;
async function loadExchange() {
    const host = await fetch("https://api.frankfurter.app/latest?=150&from=EUR&to=NOK");
    const amount = await tmp.json();
    console.log(amount);
}

loadExchange();