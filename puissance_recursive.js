const prompt = require("prompt-sync")();

const puissance = (a, p) => {
    if (p === 0) return 1;
    return a * puissance(a, p - 1);
}

console.log("Puissance de la forme a^p");
const a = +prompt("Entrez a: ");
const p = +prompt("Entrez p: ");

console.log(`La puissance de ${a} ${p} est: ${puissance(a, p)}`);
