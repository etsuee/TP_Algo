const prompt = require("prompt-sync")();

let randNum = Math.floor(Math.random() * 100) + 1;
let numPick;

let e = 1;
while (numPick != randNum) {
  let numPick = parseInt(prompt("Veuillez saisir un nombre : "));
  if (numPick < randNum) {
    console.log("Essai ", e, " : ", numPick, " -> Plus grand !");
  } else if (numPick > randNum) {
    console.log("Essai ", e, " : ", numPick, " -> Plus petit !");
  } else {
    console.log(
      "Essai ",
      e,
      " : ",
      numPick,
      " -> Bravo ! Trouvé en ",
      e,
      " essais",
    );
    break;
  }
  e++;
}
