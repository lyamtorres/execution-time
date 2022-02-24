function mystere(T) {
    let i, res;

    i = 0;
    
    while(T[i] != true && i < T.length) {
        i = i + 1; 
    }

    res = i;
    console.log(res);
}

function maxSomme1(T) {
    var temp;
    let sommeMax = T[0];

    for (let i = 0; i < T.length; i++) {
        temp = 0;
        for (let j = i; j < T.length; j++) {
            temp = temp + T[j];
            if (temp > sommeMax) {
                sommeMax = temp;
            }
        }
    }
    
    return sommeMax;
}

function maxSomme2(T, a, b) {
    let i, somme, ama, bma, resultat;

    if (a > b) {
        return 0;
    }

    if (a === b) {
        return Math.max(0, T[a]);   
    }

    c = Math.trunc((a + b) / 2);
    ama = 0;
    somme = 0;
    i = c;

    while (i >= a) {
        somme += T[i];
        ama = Math.max(ama, somme);
        i--;
    }

    bma = 0;
    somme = 0;
    i = c + 1;

    while (i <= b) {
        somme += T[i];
        bma = Math.max(bma, somme);
        i++;
    }

    resultat = Math.max(ama + bma, maxSomme2(T, a, c), maxSomme2(T, c + 1, b));

    console.log(resultat);
    return resultat;
}


function maxSomme3(T) {
    let a = 0;
    let b = 0;
    let i = 1;

    while (i < T.length) {
        b = Math.max(b + T[i], 0);
        a = Math.max(a, b);
        i++;
    }

    return a;
}

module.exports = { mystere, maxSomme1, maxSomme2, maxSomme3 };