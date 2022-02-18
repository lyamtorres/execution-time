const util = require('./utilitaires');

// la valeur max de n possible c'est 13
const n = 13;

const prechauffageOrdi = util.meilleurCas();

const mieux = util.meilleurCas();
const pire = util.pireCas(n);
const moyen = util.casMoyen(n);

util.ecrireFichier(mieux, pire, moyen);