/* Jūsų aplikacijoje turėtų būti galimybė įvesti norimos šalies pavadinimą ir aplikacija turėtų išvesti:
1. Šalies pavadinimą, "name""common"
2. Populiaciją "population"
3. Šalies plotą "area"
4. Valiutą "currencies"
5. Kalbą "languages"
6. Vėliavą "flags" "png"
7. Herbą  "coatOfArms" "png"
 */

//Zanro pasirinkimo laukas
const countrySelect = document.getElementById("country");
const rodytiButton = document.getElementById("rodyti");
const rezultatai = document.getElementById("rezultatai");
const loading = document.getElementById("loading");


fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        country_data = data[0];

        data.forEach((country_data) => {

            const coutry_name = document.createElement("option");
            coutry_name.textContent = country_data['name']['common']
            countrySelect.appendChild(coutry_name);


        })
    })


loading.style.display = "none";

const rodytiInformacija = () => {
    const valstybe = countrySelect;
    fetch(`https://restcountries.com/v3.1/name/=${valstybe}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //console.log(data);
            country_data = data[0];

            population = country_data.get('population', 'N/A')
            area = country_data.get('area', 'N/A')
            currencies = country_data.get('currencies', ['N/A'])
            languages = country_data.get('languages', ['N/A'])
            flag_url = country_data.get('flags', ['N/A'])
            coat_of_arms_url = country_data.get('coats_of_arms', ['N/A'])
        })


    /* print("Country:", country_name,
        "Population:", population,
        "Area:", area, "sq km",
        "Currency:", currencies,
        "Language:", languages,
        "Flag:", flag_url,
        "Coat of Arms:", coat_of_arms_url) */
}

rodytiButton.onclick = rodytiInformacija;