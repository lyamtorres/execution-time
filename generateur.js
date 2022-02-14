function generateurRec(tab, masterTab, n2) {
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
                generateurRec(nouveauTab, masterTab, n2 + 1);
            }
        }
    }
}

n = 6;
n2 = 1;

tab = [];
tabTrue = [];
masterTab = [];

for (let i = 0; i < n; i++) {
    tab.push(false);
    tabTrue.push(true);
}

masterTab.push(tab);
generateurRec(tab, masterTab, n2);
masterTab.push(tabTrue);

console.log(masterTab);