/* let x = 1;
async function loadMeteo() {
    const tmp = await fetch("https://api.meteo.lt/v1/places/vilnius/forecasts/long-term");
    // await Response.json;
    const meteo = await tmp.json();
    console.log(meteo.forecastTimestamps[0]);
    /* meteo.forecastTimestamps.forEach((oras) => {
        console.logy
        oras.forecastTimeUtc oras.airTemperature
        */
//}

//loadMeteo();
//*/
/* async function loadExchange(from, to, amount) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
        .then(resp => resp.json())
        .then((data) => {
            alert(`10 GBP = ${data.rates.USD} USD`);
        });
}
loadExchange(process.argv[2]);
 */


let x = 1;
async function loadExchange() {
    const host = await fetch("https://api.frankfurter.app/latest?=150&from=EUR&to=NOK");
    const amount = await tmp.json();
    console.log(amount);
}
loadExchange();