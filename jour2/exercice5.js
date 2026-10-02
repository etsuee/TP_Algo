const prompt = require("prompt-sync")();

const n = parseInt(prompt("Saisir la taille de la table : "));

function pad(num, width) {
  return String(num).padStart(width, " ");
}

let header = "    |";
for (let j = 1; j <= n; j++) {
  header += pad(j, 4);
}
console.log(header);

// Separateur
console.log("----|" + "----".repeat(n));

for (let i = 1; i <= n; i++) {
  let ligne = pad(i, 3) + " |";
  for (let j = 1; j <= n; j++) {
    ligne += pad(i * j, 4);
  }
  console.log(ligne);
}
