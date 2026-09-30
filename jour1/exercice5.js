const prompt = require("prompt-sync")();

// Arrondir au superieur : Match.ceil(x)

let long = parseFloat(prompt("Saisir une longueur : "));
let larg = parseFloat(prompt("Saisir la largeur : "));
let haut = parseFloat(prompt("Saisir la hauteur : "));

let p = (long + larg) * 2;
let surface = p * haut;

let pot = 1;
