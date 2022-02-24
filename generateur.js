function generateur(tab, masterTab, n2) {
    if (n2 == tab.length) {
        return 1;
    } else {
        for (let i = 0; i < tab.length; i++) {
            nouveauTab = [...tab];
            nouveauTab[i] = true;
            
            let a = [...masterTab];
            let b = [...nouveauTab];
            a = JSON.stringify(a);
            b = JSON.stringify(b);

            
            if (a.indexOf(b) == -1) {
                masterTab.push(nouveauTab);
                generateur(nouveauTab, masterTab, n2 + 1);
            }
        }
    }
}

function genererTableaux(n) {
    const tab = [];
    const tabTrue = [];
    const masterTab = [];

    for (let i = 0; i < n; i++) {
        tab.push(false);
        tabTrue.push(true);
    }

    masterTab.push(tabTrue);
    generateur(tab, masterTab, 1);
    masterTab.push(tab);

    console.log(masterTab);
    return masterTab;
}

function genererTableauxBis(n) {
    const masterTab = [];

    for (let i = 0; i < (1 << n); i++) {
        let tabBooleens = [];
    
        for (let j = n - 1; j >= 0; j--) {
            tabBooleens.push(Boolean(i & (1 << j)));
        }
    
        masterTab.push(tabBooleens);
    }
    
    return masterTab;
}

function genererTableauxEntiers(n) {
    const min = Math.ceil(-n / 2);
    const max = Math.floor(n / 2);
    let i, tab, random, existeNegatif, existePositif;

    // recommence la création du tableau si le dernier manque d'un positif ou négatif
    while (!(existeNegatif == true && existePositif == true)) {
        i = 0;
        tab = [];
        existeNegatif = false;
        existePositif = false;

        while (i < n) {
            random = Math.floor(Math.random() * (max - min + 1) + min);
    
            if (existeNegatif === false && random < 0) {
                existeNegatif = true;
            }
            
            if (existePositif === false && random > 0) {
                existePositif = true;
            }
    
            if (random !== 0) {
                tab.push(random);
                i++;
            }
        }
    }

    console.log(tab);
}

// genererTableaux(2);
// genererTableauxEntiers(4);

module.exports = { genererTableaux };