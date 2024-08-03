const prompt = require("prompt-sync")();

const produitImpair = (n) => {
    if (n < 1) return 1;
    if (n % 2 !== 0) return n * produitImpair(n - 2);
    return produitImpair(n - 1);
}

const n = +prompt("Entrez n: ");

console.log(`Produit impair à ${n} est : ${produitImpair(n)}`);
