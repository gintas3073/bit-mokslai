let x = 1;
/* async function loadMeteo() {
    const tmp = await fetch("https://api.meteo.lt/v1/places/vilnius/forecasts/long-term");
    const meteo = await tmp.json();
    //console.log(meteo.forecastTimestamps[0]);
    meteo.forecastTimestamps.forEach((oras) => {
        console.log(oras.forecastTimeUtc, oras.airTemperature);
    });
}
loadMeteo(); */

/* async function loadMeteo(place) {
    const tmp = await fetch("https://api.meteo.lt/v1/places/+place+/forecasts/long-term");
    const meteo = await tmp.json();
    //console.log(meteo.forecastTimestamps[0]);
    meteo.forecastTimestamps.forEach((oras) => {
        console.log(oras.forecastTimeUtc, oras.airTemperature);
    });
}
loadMeteo(vilnius); */

async function loadMeteo(place) {
    const tmp = await fetch("https://api.meteo.lt/v1/places/+place+/forecasts/long-term");
    const meteo = await tmp.json();
    //console.log(meteo.forecastTimestamps[0]);
    meteo.forecastTimestamps.forEach((oras) => {
        console.log(oras.forecastTimeUtc, oras.airTemperature);
    });
}
loadMeteo(process.argv[2]);