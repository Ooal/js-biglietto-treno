/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
e l’età del passeggero.
Sulla base di queste informazioni dovrà:
calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/
var minorenne = 17;
var over = 65;


var km = prompt("Inserisci il numero di kilometri che desideri percorrere qui");
var eta = prompt("Inserisci la tua età qui");
var costoAlKilometro = (km * 0.21);

if (eta <= minorenne) {
  document.getElementById('output').innerHTML = "Essendo che sei minorenne hai diritto ad uno sconto del 20% , quindi anzichè pagare il biglietto a prezzo pieno di " + (km * 0.21) + "€ devi pagare solo " + (km * 0.21 - ((costoAlKilometro)* 20 / 100)).toFixed(2) + "€";
} else if (eta > over) {
  document.getElementById('output').innerHTML = "Essendo che sei over 65 hai diritto ad uno sconto del 40% , quindi anzichè pagare il biglietto a prezzo pieno di " + (km * 0.21) + "€ devi pagare solo " + (km * 0.21 - ((costoAlKilometro)* 40 / 100)).toFixed(2) + "€";
} else {
  document.getElementById('output').innerHTML = "Il prezzo del biglietto è di " + (costoAlKilometro).toFixed(2) + "€";
}
