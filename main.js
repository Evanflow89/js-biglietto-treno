
// ESERCIZIO //

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const numKm = Number(prompt("Quanti km vorresti percorrere?"));
const ageUser = Number(prompt("Indica la tua età"));
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const priceKm = numKm * 0.21;
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
let discount;

if (ageUser <= 18) {
    discount = priceKm - (priceKm * 20 / 100);
} else if (ageUser >= 65) {
    discount = priceKm - (priceKm * 40 / 100);
} else {
    discount = priceKm
}



// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const finalPrice = (Math.round(discount * 100) / 100).toFixed(2);

console.log(`Il prezzo del tuo biglietto è di €${finalPrice}`);