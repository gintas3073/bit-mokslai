const fs = require('fs');

const preke = {
    pavadinimas: 'Televizorius',
    kaina: 606,
    spalva: 'juoda'

};
// keisti i stringa

const string = JSON.sringify(preke);

// saugo object
//console.log(preke);
//console.log(string);

// pagaminti fila 'preke.json'
fs.writeFileSync('preke.json', str);

// pagamins preke.json