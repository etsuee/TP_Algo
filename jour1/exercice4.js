const prompt = require("prompt-sync")();

let poids;
let taille;

let imc;
let interpretation;

poids = parseFloat(prompt("Saisir le poids : "));
taille = parseFloat(prompt("Saisir la taille : "));

imc = poids / taille ** 2;

if (imc < 18.5) {
  interpretation = "Insuffisance ponderale";
} else if (imc >= 18.5 && imc <= 24.9) {
  interpretation = "Poids normal";
} else if (imc >= 25 && imc <= 29.9) {
  interpretation = "surpoids";
} else {
  interpretation = "Obesité";
}

console.log(
  "Poids : ",
  poids,
  " - Taille : ",
  taille,
  " - IMC ",
  imc.toFixed(1),
  " - Interpretaion : ",
  interpretation,
  ".",
);
