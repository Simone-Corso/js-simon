//Sfruttiamo le timing functions per fare il conto alla rovescia per la fine di quest'anno!
//Che scadra' quindi a capodanno!

//creiamo le variabili per giorno, ora, minuto e secondi
const giornoEl = document.querySelector('span#giorni');
const oreEl = document.querySelector('span#ore');
const minutiEl = document.querySelector('span#minuti');
const secondiEl = document.querySelector('span#secondi');

// creo la data
const annoNuovo = new Date( 2024, 0, 1, 0, 0, 0, 0);
console.log(annoNuovo);

const tempo = setInterval( function(){
    const nowDate = new Date();
    const differenzaData = annoNuovo.getTime() - nowDate.getTime();

    secondiEl.innerHTML = Math.floor((differenzaData % (60 * 1000)) / 1000);
    minutiEl.innerHTML = Math.floor((differenzaData % (60 * 60 * 1000)) / (1000 * 60));
    oreEl.innerHTML = Math.floor((differenzaData % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    giornoEl.innerHTML = Math.floor((differenzaData / (60 * 60 * 24 * 1000)));

    if ( differenzaData <= 0 ){
        clearInterval(tempo);
        document.querySelector('main .futura-date h2').innerHTML = 'happy new year 2024';
    }

}, 1000);