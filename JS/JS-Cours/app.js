alert("bonjour a tous");

//declaration des variables
let firstName = "jean";
console.log(firstName);
fistName = "sara";
console.log(firstName);
firstName = "Lydie";
console.log(firstName);

//TYPAGE DYNAMIQE

let age = 76;
age = "89";

//CONSTANTES : ces valeurs ne peuvent pas etre modifie

const accelerateurPesenteur = 9.8;
const pays = "france";
//TYPE DE DONNEES
//STRING
// Concatenation a+b si on met des "" il fait l'addition
const prenom = "sara";
const nom = "dahmane";
const fullName = nom + " " + prenom;
const fullName2 = ` ${prenom} ${nom} `;

// Number
const ageMere = 60;
const agePere = 50;
const sommesDesAges = ageMere + agePere;

let nombre = 12;
let nombre2 = 22;
let SommeNbre = nombre + nombre2;

// bollean
const isMarried = true;

//prompter l'utilisateur

const prenom1 = prompt("Quel est votre age");
const nom1 = prompt("quel est le nom de famille");
const age1 = prompt("quel est votre age");

alert(
  "vous etes " + prenom1 + " " + nom1 + "est votre age est " + age1 + " ans "
);
