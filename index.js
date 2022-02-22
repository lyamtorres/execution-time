const temps = require('./temps');

// la valeur max de n possible c'est 13
const n = 2;

const meilleur = temps.meilleurCas(n);
const pire = temps.pireCas(n);
const moyen = temps.casMoyen(n);

temps.ecrireFichier(meilleur, pire, moyen);