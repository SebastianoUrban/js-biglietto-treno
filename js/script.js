/*
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
*/ 
const prezzoKm = 0.21
const scontoMinorenni = 0.20
const scontoOver65 = 0.4


const numeroKm = parseInt( prompt('Quanti chilometri devi percorrere ?') );
const etaUtente = parseInt( prompt('Quanti anni hai ?'));

let totale;


if (numeroKm > 0) {
    totale = numeroKm * prezzoKm;
} else {
    console.error('Controlla il numero dei chilometri')
}

document.getElementById('km').innerHTML = numeroKm + ' Km';
document.getElementById('costo-km').innerHTML = totale + '€';

if (etaUtente < 18) {
    document.getElementById('sconto-minorenni').innerHTML = '-'+ (totale * scontoMinorenni) + '€'
    document.getElementById('minori').innerHTML = 'Applicato';
    totale = totale * (1 - scontoMinorenni);
} else if (etaUtente > 65) {
    document.getElementById('sconto-over65').innerHTML = '-'+ (totale * scontoOver65 ) + '€'
    document.getElementById('anziani').innerHTML = 'Applicato';
    totale = totale * (1 - scontoOver65);
}

document.getElementById('prezzo-biglietto').innerHTML = totale + '€'
