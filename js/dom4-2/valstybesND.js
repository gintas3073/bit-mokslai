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



//Užkrauname visus žanrus
fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        //Gautą informaciją konvertuojame į JSON
        return response.json();
    })
    .then((data) => {
        console.log(data);

        data.forEach((g) => {
            //g = data[0];
            const o = document.createElement("option");
            o.textContent = g.name.common;

            countrySelect.appendChild(o);

            /* //name = g['name']['common']
            population = g.get('population', 'N/A')
            area = g.get('area', 'N/A')
            currencies = g.get('currencies', ['N/A'])
            languages = g.get('languages', ['N/A'])
            flag_url = g.get('flags', ['N/A'])
            coat_of_arms_url = g.get('coats_of_arms', ['N/A'])
            /*  const p = document.createElement("li"); */
            /* p.value = g.population; */
            //rezultatai.appendChild(p); * / */

        })

    });


const rodytiInformacija = () => {
    const cS = countrySelect;
    loading.style.display = "block";
    const o = document.createElement("option");
    o = cS.area;
    rezultatai.appendChild(o);

}
loading.style.display = "none";





rodytiButton.onclick = rodytiInformacija;
