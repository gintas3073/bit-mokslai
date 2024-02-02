/*
BOOLEAN - logine reiksme

Galimos reiksmes:
- true
- false

Loginiai operatoriai:
- && (and)
- || (or)
- ! (not/invert)

*/

const arSninga = true;
const arLyja = false;

const dabartineTemp = -1;
const siltaNuoTemp = 20;

const arSilta = false;

const vardas = 'Jonas';

const arNurodytasVardas = true;

console.log(true, false);

console.clear();

// SPORTAS
// - varzybos vyksta tik dienos metu
// - varzybos vyksta tik jei turime bent 2 komandas

const arDiena = true;
const arYraDviKomandos = true;

// varzybos vyksta kai tenkinamos VISOS salygos
const arVykstaVarzybos = arDiena && arYraDviKomandos;
console.log('Varzybos:', arVykstaVarzybos);

// KERMOSIUS
// - vaikas noretu gaidelio
// - vaikas noretu lazdeles
// - vaikas noretu grybuko

const arTurimGaidelio = false;
const arTurimLazedeles = true;
const arTurimGrybuko = false;

// saldaini gauna kai turimas BENT VIENA preke
const arVaikasGausSaldaini = arTurimGaidelio || arTurimLazedeles || arTurimGrybuko;
console.log('Kermosius:', arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

console.log(a && b, '->', false);
console.log(a || b, '->', true);
console.log(a || b || c, '->', true);
console.log(a && b && c, '->', false);
console.log(a && b || c, '->', true);
console.log(a || b && c, '->', true);

console.log(false && false || false, '->', false);
console.log(false && false || true, '->', true);
console.log(false && true || false, '->', false);
console.log(false && true || true, '->', true);
console.log(true && true || false, '->', true);
console.log(true && true || true, '->', true);
console.log(true && false || false, '->', false);
console.log(true && false || true, '->', true);

console.clear();
console.log(false || false && false, '->', false);
console.log(false || false && true, '->', false);
console.log(false || true && false, '->', false);
console.log(false || true && true, '->', true);
console.log(true || true && true, '->', true);
console.log(true || false && true, '->', true);

console.log(true || true && false, '->', false);
console.log(true || false && false, '->', false);

console.log((true && true) || (false && false));
console.log((true && true) || false);

console.log(((true && true) || false) && false);

console.clear();

console.log(!true);
console.log(!false);

const arMiega = false;
console.log(!arMiega);

console.log(!!true);
console.log(!!false);

console.clear();

// Visi stringai yra true, isskyrus tuscias
console.log(!!'Labas', false, true);
console.log(!!'', true, false);

// Visi skaiciai yra true, isskyrus 0 (nulis)
console.log(!!5);
console.log(!!-5);
console.log(!!0);

// positive, negative numbers
// truthy, falsy number values