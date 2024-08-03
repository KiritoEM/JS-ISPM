const prompt = require("prompt-sync")();

const produitImpair = (n) => {
    let produit = 1;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) produit *= i
    }

    return produit;
}

const n = +prompt("Entrez n: ");

console.log(`Produit impair à ${n} est : ${produitImpair(n)}`);
