function ecrireFichier(res) {
    const fs = require('fs');
    const content = `${res} ms`;

    fs.writeFile('test.txt', content, err => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

module.exports = { ecrireFichier };