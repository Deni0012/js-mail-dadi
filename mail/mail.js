// Crea una lista di email di invitati ad una festa.

// Lista di email autorizzate
const emailList = [
    "mario@gmail.com",
    "luigi@gmail.com",
    "peach@gmail.com",
    "toad@gmail.com",
    "yoshi@gmail.com"
];

// Chiedere all'utente la sua email
const userEmail = prompt("Inserisci la tua email:");

// Controllare se l'email è nella lista
let emailFound = false;

for (let i = 0; i < emailList.length; i++) {
    if (emailList[i] === userEmail) {
        emailFound = true;
        break;
    }
}
