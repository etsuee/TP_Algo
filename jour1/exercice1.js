const prompt = require("prompt-sync")();
// DEBUT
//     // Declaration
//     VARIABLE tempC : REEL
//     VARIABLE tempF : REEL
let tempC = 0;
let tempF = 0;

//     // Entrée
//     ECRIRE("Temperature en C ?")
//     LIRE(tempC)
tempC = parseFloat(prompt("Temperature en Celsius ? "));

//     // Traitement
//     tempF <- tempC * 9/5 + 32
tempF = (tempC * 9) / 5 + 32;

//     //Sortie
//     ECRIRE(tempC, " °C = ", tempF, " degres F.")
console.log(tempC, "C = ", tempF, " F");
// FIN
