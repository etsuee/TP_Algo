const prompt = require("prompt-sync")();

// DEBUT
//     VARIABLE prixHT, tva, remise : REEL
let prixHT;
let tva;
let remise;

//     VARIABLE prixTTC, montantTVA, montantRemise, prixFinal : REEL
let prixTTC;
let montantTVA;
let montantRemise;
let prixFinal;

//     ECRIRE("Prix HT ? ")
//     LIRE(prixHT)
prixHT = parseFloat(prompt("Prix HT ? "));

//     ECRIRE("Taux TVA ? ")
//     LIRE(TVA)
tva = parseFloat(prompt("Taux de TVA ? "));

//     ECRIRE("Pourcentage de remise ? ")
//     LIRE(remise)
remise = parseFloat(prompt("Pourcentage de remise ? "));

//     montantTVA <- prixHT * tva / 100
montantTVA = (prixHT * tva) / 100;

//     prixTTC <- prixHT + montantTVA
prixTTC = prixHT + montantTVA;

//     montantRemise <- prixTTC / remise
montantRemise = prixTTC / remise;

//     prixFinal <- prixTTC - remise
prixFinal = prixTTC - remise;

//     ECRIRE("Le montant de TVA est de ", montantTVA, " euro." )
console.log("Le montant de TVA est de ", montantTVA, " euro.");

//     ECRIRE("Le prix TTC est de ", prixTTC, " euro.")
console.log("Le prix TTC est de ", prixTTC, " euro.");

//     ECRIRE("Le montant de la remise est de ", montantRemise, " euro.")
console.log("Le montant de la remise est de ", montantRemise, " euro.");

//     ECRIRE("Le prix final est : ", prixFinal, " euro.")
console.log("Le prix final est : ", prixFinal, " euro.");
// FIN
