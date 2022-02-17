const util = require('./utilitaires');

const n = 2; // Taille du tableau

const mieux = util.meilleurCas();
const pire = util.pireCas(n);
const moyen = util.casMoyen(n);

util.ecrireFichier(mieux, pire, moyen);