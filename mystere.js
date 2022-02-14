/* Rôle : Parcourir le tableau T jusqu'à trouver "vrai", et ensuite retourner sa position */

function mystere(T) {
    let i, res;

    i = 0;
    while(T[i] != true && i < T.length) {
        i = i + 1; 
    }
    res = i;
    console.log(res);
}

mystere([false, false, false]);
/* mystere([false, false, true]);
mystere([false, true, false]);
mystere([false, true, true]);

mystere([true, false, false]);
mystere([true, false, true]);
mystere([true, true, false]);
mystere([true, true, true]); */

