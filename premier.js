const prompt = require("prompt-sync")();

const premier = (n) => {
    let cpt = 0;

    for (let i = 1; i < n / 2; i++) {
        if (n % i === 0) {
            cpt++;
        }
    }

    if (cpt === 1) return true;

    return false;
}

const n = +prompt("Entrez n: ");

console.log(`Le nombre ${n} est ${premier(n) === true ? "premier" : "non premier"}`);
