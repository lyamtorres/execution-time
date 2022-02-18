/* function generateur(tab, masterTab, n2) {
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

    return masterTab;
} */

function genererTableaux(n) {
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

module.exports = { genererTableaux };