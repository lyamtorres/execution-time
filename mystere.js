/* Rôle : Parcourir le tableau T jusqu'à trouver "vrai", et ensuite retourner sa position */

function ecrireFichier(temps) {
    const fs = require('fs')
    const content = 'Au mieux: ' + temps + ' ms'

    fs.writeFile('test.txt', content, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

function mystere(T) {
    const start = Date.now();
    let i, res;

    i = 0;
    while(T[i] != true && i < T.length) {
        i = i + 1; 
    }
    res = i;
    console.log(res);

    const duration = Date.now() - start;

    ecrireFichier(duration);
}

mystere([true, true, true]);