// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//
// Creazione di un array di squadre di calcio
const squads = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

// console.log(squads);

for (let i = 0; i < squads.length; i++) {
    // console.log(squadre[i]);
    const curSquad = squads[i];
    if (curSquad["puntiFatti"] === 0) {
        curSquad["puntiFatti"] = getRandomNumber(1, 100).toFixed();
    }
    if (curSquad["falliSubiti"] === 0) {
        curSquad["falliSubiti"] = getRandomNumber(1, 100).toFixed();
    }
}

console.log("Tutte le squadre:", squads);

const squadsAndFail = squads.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log(squadsAndFail);


// Funzione numero random
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}