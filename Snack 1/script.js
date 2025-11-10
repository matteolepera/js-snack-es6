// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.
//
//quindi da questo array di bici devo prendere solo quella che pesa meno.

// Creazione dell'array biciclette di oggetti
const biciclette = [
    { nome: "Bianchi Sprint", peso: 7.8 },
    { nome: "Specialized Tarmac", peso: 7.2 },
    { nome: "Cannondale SuperSix", peso: 7.5 },
    { nome: "Trek Emonda", peso: 6.9 },
    { nome: "Pinarello Dogma", peso: 7.1 }
];

let biciLeggera = biciclette[0];
// console.log(biciclette);
for (let i = 0; i < biciclette.length; i++) {
    // console.log(biciclette[i]);
    const curBici = biciclette[i];
    if (curBici["peso"] < biciLeggera.peso) {
        biciLeggera = curBici;
    }
}

console.log(`La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso}kg`)