//Accéder à une collection
const para = document.querySelectorAll("p");

console.log(para[0]);

para[0].innerText = "Raphael Henon est un dev";

const liste = document.querySelectorAll("li");
liste[3].innerText = "Java";

para[2].innerText = "NOUBISSI";

for (let i = 0; i < para.length; i++) {
  para[i].innerText = "Ce qu'on veut écrire";
  para[i].style.color = "red";
  para[i].style.fontWeight = "bold";
  para[i].style.fontStyle = "italic";
  para[i].style.border = "solid black 2px";
}

//Mettre en rouge tous les élements impairs de la liste des technos

for (let i = 0; i < liste.length; i = i + 2) {
  liste[i].style.color = "red";
  // liste[i].style.
}

//Accéder à une occurence

const p = document.querySelector("p");
p.innerText = "Je suis dans une joie immence";

// Ajouter des elements
const technos = document.querySelector("#technos");

technos.innerHTML += "<li>Papapapa</li>";
// console.log(technos.innerHTML);

// Ajouter Kubernetes
const devops = document.querySelector("#devops");
devops.innerHTML = "<li>Kubernetes</li>" + devops.innerHTML;

//Création d'un noeud dans le DOM
const typescript = document.createElement("li");
typescript.innerText = "Typescript";

const dart = document.createElement("li");
dart.innerText = "Dart";

//Ajouter un enfant
technos.appendChild(typescript);
technos.appendChild(dart);

//Ajouter plusieurs enfants
const tests = document.createElement("li");
tests.innerText = "Test Driven Development";

const aws = document.createElement("li");
aws.innerText = "Amazon Web Services";

devops.append(tests, aws);

//Exo jihane creer un titrre3 et liste ordonée avec langes c,c++,go
const langages = document.querySelector("#langages");
const listLang = document.createElement("h3");
listLang.innerText = "Listes des Langages ";
//langages.appendChild(listLang);

const listOrdonnee = document.createElement("ol");
//langages.appendChild(listOrdonnee);
langages.append(listLang, listOrdonnee);
const langageC = document.createElement("li");
langageC.innerText = "C";

const langageCPlusPlus = document.createElement("li");
langageCPlusPlus.innerText = "C++";

const langageGo = document.createElement("li");
langageGo.innerText = "go";

listOrdonnee.append(langageC, langageCPlusPlus, langageGo);

//ryad 2eme solution

/*const div = document.querySelector("#langages"); // ici on recup la div avec l'id
const titreH3 = document.createElement("h3");
titreH3.innerText = "Liste des langages";
// div.appendChild(titreH3);

const listeOrdonnee = document.createElement("ol");
listeOrdonnee.innerHTML = listeOrdonnee.innerHTML + "<li>C</li>";
listeOrdonnee.innerHTML = listeOrdonnee.innerHTML + "<li>C++</li>";
listeOrdonnee.innerHTML = listeOrdonnee.innerHTML + "<li>GO</li>";

div.append(titreH3, listeOrdonnee);
//FIN RYAD */

//christian

/*function createListTag(tagName, content) {

    const li = document.createElement(tagName);
    
    li.innertext = content;
    
    return li;
    
    }
    
    
    
    // Version Jihane
    
    const langages = document.querySelector("#langages");
    
    const listLang = document.createElement("h3");
    
    listLang.innerText = "Listes des Langages ";
    
    const listeDesLangages=["C","C++","Go"]
    
    
    
    const listOrdonnee = document.createElement("ol");
    
    for(let i=0;i<listeDesLangages.length;i++){
    
    const li=createListTag("li",listeDesLangages[i]);
    
    listOrdonnee.appendChild(li)
    
    }
    
    
    
    langages.append(listLang,listOrdonnee) */
