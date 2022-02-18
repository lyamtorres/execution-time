const util = require('./utilitaires');

// la valeur max de n possible c'est 13
const n = 3;

const mieux = util.meilleurCas(n);
const pire = util.pireCas(n);
const moyen = util.casMoyen(n);

util.ecrireFichier(mieux, pire, moyen);