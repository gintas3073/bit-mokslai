class Trukmena {
    sveikojiDalis = 0;
    skaitiklis = 0;
    daliklis = 0;

    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.sveikojiDalis = sveikojiDalis;
        this.skaitiklis = skaitiklis;
        this.daliklis = daliklis;
    }
    isvesti() {
        return `Trukmena ${this.sveikojiDalis}  ${this.skaitiklis} / ${this.daliklis}`;
    }
    get beSveikoSk() {
        let s = this.sveikojiDalis * this.daliklis + this.skaitiklis;
        return (`${s} / ${this.daliklis}`);
    }
    get s() {
        return (this.sveikojiDalis * this.daliklis + this.skaitiklis);
    }
}

const a = new Trukmena(1, 2, 5);
const b = new Trukmena(0, 5, 6);

console.log(`Duotas skaicius a: ${a.isvesti()}`);
console.log(a.beSveikoSk);
console.log(`Duotas skaicius b: ${b.isvesti()}`);
console.log(b.beSveikoSk);


const bendrasSk = a.s * b.daliklis + b.s * a.daliklis;
const bendrDal = a.daliklis * b.daliklis;
const sveikasSk = Math.floor(bendrasSk / bendrDal);
console.log(`Sumos benras skaitiklis ${bendrasSk} Bedraras daliklis ${bendrDal}`);
console.log(` Sveika dalis ${sveikasSk}  trukmena ${bendrasSk % bendrDal} / ${bendrDal}`);
console.log(`Desimtainis skaicius ${bendrasSk / bendrDal}`);


