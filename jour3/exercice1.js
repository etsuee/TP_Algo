function minimum(tab) {
  let min = tab[0];
  for (let i of tab) {
    if (i < min) min = i;
  }
  return min;
}

function maximum(tab) {
  let max = tab[0];
  for (let i of tab) {
    if (i > max) max = i;
  }
  return max;
}

function moyenne(tab) {
  let somme = 0;
  for (i of tab) {
    somme += i;
  }
  return somme / tab.length;
}

function ecartType(tab) {
  const moy = moyenne(tab);
  let sommeCarres = 0;
  for (i of tab) {
    sommeCarres += (i - moy) ** 2;
  }
  return Math.sqrt(sommeCarres / tab.length);
}

function afficherStats(tab) {
  console.log("Tableau   : ", [tab.join(", ")]);
  console.log("Min       : ", minimum(tab));
  console.log("Max       : ", maximum(tab));
  console.log("Moyenne   : ", moyenne(tab));
  console.log("EcartType : ", ecartType(tab).toFixed(2));
}

afficherStats([10, 20, 30, 40, 50]);
afficherStats([5, 5, 5, 5]);
afficherStats([1]);
afficherStats([-3, 0, 3]);
