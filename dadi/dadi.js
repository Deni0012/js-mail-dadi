// Gioco dei Dadi

// Generare numero random per il computer
const computerDado = Math.floor(Math.random() * 6) + 1;

// Chiedere all'utente di inserire un numero tra 1 e 6
const userDado = parseInt(prompt("Inserisci un numero tra 1 e 6:"), 10);

// Verificare che l'input sia valido
if (userDado < 1 || userDado > 6 || isNaN(userDado)) {
    console.log("Numero non valido. Ricarica la pagina e inserisci un valore tra 1 e 6.");
} else {
    console.log(`Hai tirato: ${userDado}`);
    console.log(`Il computer ha tirato: ${computerDado}`);
    
    // Determiniamo il vincitore
    if (userDado > computerDado) {
        console.log("Complimenti! Hai vinto!");
    } else if (userDado < computerDado) {
        console.log("Il computer ha vinto! Ritenta!");
    } else {
        console.log("Pareggio!");
    }
}
