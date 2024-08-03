let tab = [1, 0, 6, 8, 0, 5, 2];

for (let i = 0; i < tab.length; i++) {
  if (tab[i] === 0) {
    let k = i + 1;

    while (k < tab.length) {
      if (tab[k] !== 0) {
        let temp = tab[i];
        tab[i] = tab[k];
        tab[k] = temp;
        break;
      }
      k++;
    }
  }
}

console.log(tab);
