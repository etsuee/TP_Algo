const prompt = require("prompt-sync")();

// DEBUT
//   VARIABLE nombre1 : REEL
//   VARIABLE nombre2 : REEL
//   VARIABLE operateur : CHAINE
//   VARIABLE somme : REEL
//   VARIABLE substraction : REEL
//   VARIABLE multiplication : REEL
//   VARIABLE division : REEL

//   ECRIRE("Saisir le premier nombe")
//   LIRE(nombre1)
//   ECRIRE("Saisir le deuxieme nombre")
//   LIRE(nombre2)
//   ECRIRE("Saisir le deuxieme nombre")
//   LIRE(nombre2)
let nb1 = parseFloat(prompt("Saisir le premier nombre : "));
let nb2 = parseFloat(prompt("Saisir le deuxieme nombre : "));
const operateur = prompt("Saisir un opérateur : + - * ou /");

//   somme <- nombre1 + nombre2
//   substraction <- nombre1 - nombre2
//   multiplication <- nombre1 * nombre2
//   division <- nombre1 / nombre2
let somme = nb1 + nb2;
let substraction = nb1 - nb2;
let multiplication = nb1 * nb2;
let division = nb1 / nb2;

//   case of operateur
//     +    ECRIRE(nombre1, " + ", nombre2, " = ", somme)
//     -    ECRIRE(nombre1, " - ", nombre2, " = ", substraction)
//     *    ECRIRE(nombre1, " * ", nombre2, " = ", multiplication)
//     /    ECRIRE(nombre1, " / ", nombre2, " = ", division)
//   FIN
switch ((operateur, nb2)) {
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
    console.log(nb1, " / ", nb2, " = ", division);
    break;
  case ("/", 0):
    console.log("Erreur : division par zero");
    break;
  default:
    console.log("Erreur : operateur inconnu");
}

// FIN
