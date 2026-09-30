const prompt = require("prompt-sync")();

let n = parseFloat(prompt("Saisir un nombre : "));

for (let i = 1; i <= n; i++) {
  let ligne = " | ";
  for (let j = 1; j <= n; j++) {
    ligne += `${(i * j).toString().padStart(4)}`;
  }
  console.log(i + ligne);
}
