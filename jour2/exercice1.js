const prompt = require("prompt-sync")();

// DEBUT
//   VARIABLE nombre1 : REEL
//   VARIABLE nombre2 : REEL
//   VARIABLE operateur : CHAINE

//   VARIABLE somme : REEL
//   VARIABLE substraction : REEL
//   VARIABLE multiplication : REEL
//   VARIABLE division : REEL

//   ECRIRE("Saisir le premier nombre")
//   LIRE(nombre1)
//   ECRIRE("Saisir un opérateur : + - * ou /")
//   LIRE(operateur)
//   ECRIRE("Saisir le deuxieme nombre")
//   LIRE(nombre2)

const nb1 = parseFloat(prompt("Saisir le premier nombre : "));
const operateur = prompt("Saisir un opérateur : + - * ou /");
const nb2 = parseFloat(prompt("Saisir le deuxieme nombre : "));

//   somme <- nombre1 + nombre2
//   substraction <- nombre1 - nombre2
//   multiplication <- nombre1 * nombre2
//   division <- nombre1 / nombre2
let somme = nb1 + nb2;
let substraction = nb1 - nb2;
let multiplication = nb1 * nb2;
let division = nb1 / nb2;

//  SELON operateur FAIRe
//     CAS "+" :
//       ECRIRE(nombre1, " + ", nombre2, " = ", somme)
//     CAS "-" :
//       ECRIRE(nombre1, " - ", nombre2, " = ", substraction)
//     CAS "*" :
//       ECRIRE(nombre1, " * ", nombre2, " = ", multiplication)
//     CAS "/" :
//       SI nombre2 = 0 ALORS
//         ECRIRE("Erreur : division par zero !")
//       SINON
//         ECRIRE(nombre1, " / ", nombre2, " = ", division)
//       FIN SI
//     DEFAULT :
//       ECRIRE("Erreur : operateur inconnu)
//   FIN SELON
// FIN
switch (operateur) {
  case "+":
    console.log(nb1, " + ", nb2, " = ", somme);
    break;
  case "-":
    console.log(nb1, " - ", nb2, " = ", substraction);
    break;
  case "*":
    console.log(nb1, " * ", nb2, " = ", multiplication);
    break;
  case "/":
    if (nb2 === 0) {
      console.log("Erreur : division par zero");
    } else {
      console.log(nb1, " / ", nb2, " = ", division);
    }
    break;
  default:
    console.log("Erreur : operateur inconnu");
}
