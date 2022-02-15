const algos = require('./mystere');
const util = require('./ecrireFichier');
const { performance } = require('perf_hooks');

const n = 5;
const tab = [];

// Au mieux

// Au pire
for (let i = 0; i < n; i++) {
    tab.push(false);
}

var start = performance.now();

setTimeout(function () {
    algos.mystere(tab);
    const duration = performance.now() - start;
    util.ecrireFichier(duration);
}, 1000); // Arrête l'exécution de mystere durant 1000ms = 1s

// En moyenne