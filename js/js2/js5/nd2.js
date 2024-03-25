const axios = require('axios');
async function convertCurrency(currency, amount) {
    const response = await axios.get("https://api.frankfurter.app/latest?from=EUR&to=${currency}");
    const rate = response.data.rates[currency];
    const convertedAmount = (rate * amount).toFixed(2);
    console.log(`${currency} kursas ${rate}`);
    console.log(`${amount} EUR =>  ${convertAmount} ${currency}`);

    const currency = process.argv[2];
    const currency = process.argv[3];


    /* }
    async function loadExchange() {
        
        const host = await fetch("https://api.frankfurter.app/latest?=150&from=EUR&to=NOK");
        const amount = await tmp.json();
        console.log(amount);
    } */

    loadExchange();