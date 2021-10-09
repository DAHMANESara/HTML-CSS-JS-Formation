const tailleMatrice = parseInt(
  prompt("Veuillez entrer la taille de la matrice")
);

const matrice = [];
let sommeDiagonal = 0;

// ici tu declare une matrice vide
for (let i = 0; i < tailleMatrice; i++) {
  //si user saisie 3 on cree 3 tab vide
  matrice[i] = [];
}

//ici on remplit chaque tab avec ce que entre lutilisateur
for (let i = 0; i < tailleMatrice; i++) {
  for (let j = 0; j < tailleMatrice; j++) {
    matrice[i][j] = parseInt(prompt("saisez les nombres de la matrice"));
  }
}

for (let i = 0; i < tailleMatrice; i++) {
  sommeDiagonal += matrice[i][i];
}
console.log(`La matrice est matrice = [ ${matrice} ]`);
console.log(`sommme de la diagonale est : ${sommeDiagonal}`);
