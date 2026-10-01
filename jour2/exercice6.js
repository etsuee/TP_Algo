const prompt = require("prompt-sync")();

let n = parseFloat(prompt("Saisir un nombre : "));

console.log("============= Triangle ============= ");

for (let i = 1; i <= n; i++) {
  let ligne = "";
  for (let j = 1; j <= i; j++) {
    ligne += "* ";
  }
  console.log(ligne);
}

console.log("============= Triangle inverse ============= ");

for (let i = 1; i <= n; i++) {
  let ligne = "";
  for (let j = n; j >= i; j--) {
    ligne += "* ";
  }
  console.log(ligne);
}

console.log("============= Pyramide centrée ============= ");

for (let i = 1; i <= n; i++) {
  let ligne = "";
  for (let j = 1; j <= n - i; j++) {
    ligne += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    ligne += "* ";
  }
  console.log(ligne);
}

console.log("============= Losange ============= ");
