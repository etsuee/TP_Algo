// ============================== Partie 1 ============================
console.log("Echange de variables : partie 1");

// DEBUT
//     VARIABLE a : ENTIER
//     VARIABLE b : ENTIER
//     variable temp : ENTIER
//     a <- 5
//     a <- 3
//     temp <- a
let a = 5;
let b = 3;
let temp = a;

//     ECRIRE("Avant : a = ", a, " b = ", b)
console.log("Avant : a = ", a, " b = ", b);

//     a <- b
//     b <- temp
a = b;
b = temp;

//     ECRIRE("Après : a = ", a, ",b = ", b)
console.log("Après : a = ", a, ", b = ", b);
// FIN

// ============================== Partie 2 ============================
console.log("Echange de variables : partie 2");

let a2 = 3;
let b2 = 42;

console.log("Avant : a = ", a2, " b = ", b2);

a2 = b2 + a2;
b2 = a2 - b2;
a2 = a2 - b2;

console.log("Après : a = ", a2, ", b = ", b2);

// ============================== Partie 3 ============================
console.log("Echange de variables : partie 3");

let a3 = 3;
let b3 = 5;

[a3, b3] = [b3, a3];

console.log("Avant : a = ", a3, ", b = ", b3);

[b3, a3] = [a3, b3];

console.log("Après : a = ", a3, ", b = ", b3);
