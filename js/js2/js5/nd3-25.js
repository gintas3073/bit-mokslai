/* Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai: sveikojiDalis, skaitiklis,
 daliklis
Sukurkime klasei setter‘ius ir getter‘ius
Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną tokiu formatu: 
sveikojiDalis skaitiklis / daliklis(pvz.: 1 2 / 5)
Ištestuokime programinį kodą sukurdami objektą, suteikime kintamiesiems reikšmes ir išveskime rezultatą.
Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris pridėtų sveikąjį skaičių prie trupmenos, ištestuokime pakoreguotą kodą.
Sukurkite dar vieną papildomą metodą: prideti(sveikasisSkaicius, skaitiklis, vardiklis).Nepamirškite jog pridedant skaičių reikia subendravardiklinti).
Sukurkime metodą pridetiTrupmena(x), šis metodas turės prie esamos trupmenos pridėti paduotą trupmeną.Nepamirškite jog taip pat po šio veiksmo reikės suprastinti trupmeną.
Sukurkime metodą toDouble() kuris grąžintų esamą trupmenos reikšmę realiuoju skaičiumi(per kablelį).

Papildomai padarykite:
Sukurkime metodą prastinti(), jis turėtų suprastinti trupmeną.Metodą padarykime matomą tik pačiam objektui(jis turi būti nepasiekiamas iš išorės).
Padarykime jog po kiekvieno seterio ir po pridėjimo metodų įvykdymo būtų iškviečiamas prastinimo metodas.
 */
class Trukmena {
    #sveikojiDalis = 0;
    #skaitiklis = 0;
    #daliklis = 0;

    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.#sveikojiDalis = x;
        this.#skaitiklis = y;
        this.#daliklis = z;
    }


    //Metodas isvedimas
    isvesti() {
        return `${this.#sveikojiDalis}   ${this.#skaitiklis} / ${this.#daliklis}`;
    }
    // Metodas sveiko prideti ssveika sk prie trukmenos
    /* beSveikoSk() {
        return (`(${this.#sveikojiDalis} * ${this.#daliklis}+ ${this.skaitiklis}) / ${this.daliklis}`)
    } */



}

const a = new Trukmena(1, 2, 5);
//const b = new Trukmena(0, 5, 6);
console.log(isvesti);
console.log(beSveikoSk);
//console.log(`Atstumas nuo a iki b: ${a.distance(b)}`);