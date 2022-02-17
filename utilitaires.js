const { performance } = require('perf_hooks');
const algos = require('./mystere');

function ecrireFichier(mieux, pire, moyenne) {
    const fs = require('fs');
    const content = `
        Au mieux : ${mieux} ms

        Au pire : ${pire} ms

        En moyenne : ${moyenne} ms
        `;

    fs.writeFile('temps.txt', content, err => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

function getBestCase() {
    const tab = [];

    tab.push(true);

    const start = performance.now();
    algos.mystere(tab);
    const duration = performance.now() - start;
    return duration;
}

function getWorstCase(n) {
    const tab = [];

    for (let i = 0; i < n; i++) {
        tab.push(false);
    }

    const start = performance.now();
    algos.mystere(tab);
    const duration = performance.now() - start;
    return duration;
}

function getAverageCase(n) {
    return 0;
}

module.exports = { ecrireFichier, getBestCase, getWorstCase, getAverageCase };