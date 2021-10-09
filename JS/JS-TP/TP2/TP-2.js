let distanceM = prompt("Entre ta distance");
let tempsSec = prompt("Entre le temps en sec");
let vitesse = distanceM / tempsSec;
distanceM = parseInt(distanceM);
tempsSec = parseInt(tempsSec);

alert(`${vitesse} m/s`);

console.log(vitesse);
