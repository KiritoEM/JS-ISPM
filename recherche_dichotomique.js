const prompt = require("prompt-sync")();

let tab = [1, 0, 6, 8, 0, 5, 2];
tab.sort();
console.log("Tableau aprés tri: ", tab);

let start = 0;
let end = tab.length - 1;
let mid = -1;
let pos = false;
let searched = prompt("Entrez un nombre à rechercher: ");

while (start <= end && pos === false) {
  mid = (start + end) / 2;

  if (tab[mid] === searched) {
    pos = true;
    break;
  } else if (tab[mid] > searched) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(`Nombre à rechercher ${searched} est à la position: ${end}`);
