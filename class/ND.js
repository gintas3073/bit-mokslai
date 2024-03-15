/*
Animal (name, color), intro():
    - Pet (name, color), intro():
        - Dog (name, color, sound), intro()
            - sound -> Double sound
        - Cat (name, color), intro()
        - Hamster (name, color), intro(), eat()
            - foodAmount
            - eat(): Mano burnoje siuo metu yra {{foodAmout++}} morku

    - Bird (name, color), intro(), fly(), stopFly():
        - Parrot (name, color), intro(), fly(), stopFly(), repeatSound(), repeatHistory()
            - history
            - repeatSound({{sound}})
            - repeatHistory() isspausdina paskutinius 3 jam pasakytus tekstus
        - Canary (name, color), intro(), fly(), stopFly()
        - Stark (name, color), intro(), fly(), stopFly(), bringBabies()
            - babiesCount
            - bringBabies(): Zmones i kopustu lauka atnesiau dar viena vaika ({{babiesCount}})

    - Fish (name, color), intro(), swim(), stopSwim():
        - Shark (name, color), intro(), swim(), stopSwim(), eatHuman()
            - eatHuman() Kaip noreciau paragauti plaukmenu...
        - Goldfish (name, color, wishLimit?), intro(), swim(), stopSwim(), makeWish()
            - wishLimit (default: 3)
            - makeWish({{myWish}})
                - jeigu liko neispildytu noru: Stai tavo noras: {{myWish}}
                - jeigu neliko neispildytu noru: Daugiau noru ispildyti nebegaliu :(
                - jeigu is viso nepildo noru: As nepildau noru / Wrong fish 👀
        - Dophin (name, color), intro(), swim(), stopSwim(), jumpFromWater()
            - jumpCount
            - jumpFromWater() Delfinas issoko is vandens {{jumpCount}}-a karta


            //Papildomi reikalavimai:
-naminiai gyvunai kartoja 2 kartus
-vandens gyvunai  kartoja ) kartu
                     delfinas lkaroja 5 kartus
-psuksciai {sound} kartoja 3 kartus

            */


//const phrase = 'As skrendu namo';
//const phrase2 = ' Jau paskrida';
//const phrase3 = 'Ka siandein valgome?';
//const phrase4 = ' Miegot laikas';







//console.log(t.length < 4 ? t : t.slice(-3));
//console.log(t.length);

function mes(t) {
    if (t.length < 4) {
        return t;
    } else {
        return t.slice(-3);
    }
}
const t = ['ad', 'ig', 'c', 'd', 'ass'];
console.log(mes(t));