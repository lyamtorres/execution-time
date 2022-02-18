const { performance } = require('perf_hooks');
const algos = require('./mystere');
const generateur = require('./generateur');

function ecrireFichier(mieux, pire, moyen) {
    const fs = require('fs');
    const content = `
        Au mieux : ${mieux} ms

        Au pire : ${pire} ms

        En moyenne : ${moyen} ms
        `;

    fs.writeFile('temps.txt', content, err => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

function meilleurCas(n) {
    const tab = [true];

    for (let i = 0; i < n - 1; i++) {

        // ajoute des booléens au hazard dans tab
        tab.push(Math.random() < 0.5);
    }

    const start = performance.now();
    algos.mystere(tab);
    const duration = performance.now() - start;
    return duration;
}

function pireCas(n) {
    const tab = [];

    for (let i = 0; i < n; i++) {
        tab.push(false);
    }

    const start = performance.now();
    algos.mystere(tab);
    const duration = performance.now() - start;
    return duration;
}

function casMoyen(n) {
    let total = 0;
    let start, duration;

    // ajoute dans tab toutes les instances pour un n donné
    const tab = [...generateur.genererTableaux(n)];

    // calcule la duration de mystere pour chaque instance
    tab.forEach((instance) => {
        start = performance.now();
        algos.mystere(instance);
        duration = performance.now() - start;
        total += duration;
    });

    // divise la duration totale par le nombre d'instances
    return total /= Math.pow(2, n);
}

module.exports = { ecrireFichier, meilleurCas, pireCas, casMoyen };