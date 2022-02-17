const util = require('./utilitaires');

const n = 10000000; // Taille du tableau

const mieux = util.getBestCase();
const pire = util.getWorstCase(n);
const moyenne = util.getAverageCase(n);

util.ecrireFichier(mieux, pire, moyenne);