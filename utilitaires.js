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

/**
 * pireCas() retourne le plus grand temps d'exécution de la fonction mystere
 * n représente la taille du tableau utilisé
 */
function pireCas(n) {
    let tempsMax = 0;

    // ajoute dans tab toutes les instances pour un n donné
    const tab = [...generateur.genererTableaux(n)];
    const nbInstances = Math.pow(2, n);

    // calcule la duration maximale parmi toutes les instances
    for (let i = 0; i < nbInstances; i++) {
        start = performance.now();
        algos.mystere(tab[i]);
        duration = performance.now() - start;

        if (tempsMax < duration || tempsMax === 0) {
            tempsMax = duration;
        }
    }

    return tempsMax;
}

/**
 * casMoyen() retourne le temps moyen d'exécution de la fonction mystere
 * n représente la taille du tableau utilisé
 */
function casMoyen(n) {
    let total = 0;
    let start, duration;
    const tab = [...generateur.genererTableaux(n)];
    const nbInstances = Math.pow(2, n);
    
    // calcule la duration de mystere pour chaque instance
    for (let i = 0; i < nbInstances; i++) {
        start = performance.now();
        algos.mystere(tab[i]);
        duration = performance.now() - start;
        total += duration;
    }

    // divise la duration totale par le nombre d'instances
    return total /= nbInstances;
}

module.exports = { ecrireFichier, meilleurCas, pireCas, casMoyen };