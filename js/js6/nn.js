const stud = [
    {
        "vardas": "Jonas",
        "pavarde": "Jonaitis",
        "amzius": 30,
        "pazymiai": [7, 8, 6, 5]
    },
    {
        "vardas": "Petras",
        "pavarde": "Petraitis",
        "amzius": 25,
        "pazymiai": [9, 6, 5]
    },
    {
        "vardas": "Ona",
        "pavarde": "Onaite",
        "amzius": 35,
        "pazymiai": [8, 7, 5, 6]
    },
    {
        "vardas": "Marytė",
        "pavarde": "Maryčiūtė",
        "amzius": 16,
        "pazymiai": [5, 9, 6]
    },
    {
        "vardas": "Tomas",
        "pavarde": "Tomaitis",
        "amzius": 40,
        "pazymiai": [7, 8, 9]
    },
    {
        "vardas": "Laura",
        "pavarde": "Laurinavičiūtė",
        "amzius": 12,
        "pazymiai": [6, 5, 9]
    },
    {
        "vardas": "Antanas",
        "pavarde": "Antanaitis",
        "amzius": 33,
        "pazymiai": [8, 7, 5, 6, 9]
    },
    {
        "vardas": "Giedrė",
        "pavarde": "Giedraitė",
        "amzius": 31,
        "pazymiai": [7, 9, 8, 5]
    },
    {
        "vardas": "Mantas",
        "pavarde": "Mantaitis",
        "amzius": 29,
        "pazymiai": [9, 6, 7]
    }

]


stud.forEach((s) => {
    s.amzius < 18 ? console.log(`${s.vardas} nepilnametis`) : false;

})

