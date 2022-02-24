const temps = require('./temps');
const operation = require('./operation');

// la valeur max de n possible c'est 13
/* const n = 2;

const meilleur = temps.meilleurCas(n);
const pire = temps.pireCas(n);
const moyen = temps.casMoyen(n);

temps.ecrireFichier(meilleur, pire, moyen); */

const tab = [2, -3, 15, 7, -8, 14, -22, 15, 6];
const tab2 = [-3, 7, -12, 11, 7, -9, 12, -4, 3];
const tab3 = [2, -3, 15, 7, -8, 11, -22, -2, -2, 6, 18];

console.log(operation.maxSomme2(tab, 0, tab.length - 1));