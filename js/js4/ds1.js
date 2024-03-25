const sandelys = [
    {
        "pavadinimas": "Kavos puodelis",
        "kaina": 5.99,
        "aprasymas": "Baltas keraminis kavos puodelis su mėlynais taškeliais",
        "kiekis_sandelyje": [20, 30, 25, 28]
    },
    {
        "pavadinimas": "Dviratis",
        "kaina": 299.99,
        "aprasymas": "Plius dydis, tinka tiek vaikams, tiek suaugusiems",
        "kiekis_sandelyje": [10, 15, 12, 18]
    }
]

sandelys.forEach((preke) => {
    let suma = 0;
    preke.kiekis_sandelyje.forEach((kiekis) => {
        suma += kiekis;

    })
    console.log(`${preke.pavadinimas}, kaina${preke.kaina} EUR, kiekis: ${suma}`);

})
