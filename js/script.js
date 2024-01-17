console.log("Tutto funziona")
/*
//! SNACK 1

const tableName = 'Tavolo Vip';

const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
  ];

const guestsList = guests.map((guest, i) => {

    let listedGuest = {
        nomeTavolo : tableName,
        nomeOspite : guest,
        numPosto : (i + 1),
    }

    return (listedGuest);
})

console.table(guestsList)
*/
/*
//! SNACK 2

const students = [
    {
        id : 213,
        name : "Marco della Rovere",
        grades : 78, 
    },
    {
        id : 110,
        name : "Paola Cortellessa",
        grades : 96, 
    },
    {
        id : 250,
        name : "Andrea Mantegna",
        grades : 48, 
    },
    {
        id : 145,
        name : "Gaia Borromini",
        grades : 74, 
    },
    {
        id : 196,
        name : "Luigi Grimaldello",
        grades : 68, 
    },
    {
        id : 102,
        name : "Piero della Francesca",
        grades : 50, 
    },
    {
        id : 120,
        name : "Francesca da Polenta",
        grades : 84, 
    },
]

//prendo gli studenti con un voto superiore a 70
const bestStuds = students.filter(({grades}) => grades > 70);

console.table(bestStuds)

// creo una lista degli studenti con voto maggiore di 70 e id superiore a 120

const bestStudsOver120 = bestStuds.filter(({id}) => id > 120);

console.table(bestStudsOver120)

// stampo le targhe con il nome degli studenti in maiuscolo

    // TODO: imposto la funzione che mi permettere di trasformare la stringa in maiuscolo
    
    const studentsTag = students.map(({name}) => name.toUpperCase())

    console.table(studentsTag)
*/

//! SNACK 3

const bikes = [
    {
        nome : "Vicini",
        peso: 15,
    },
    {
        nome : "Bianchi",
        peso: 13,
    },
    {
        nome : "Cipollini",
        peso: 9,
    },
    {
        nome : "Pantani",
        peso: 10,
    },
    {
        nome : "Ganna",
        peso: 7,
    },
    {
        nome : "Ganna 2",
        peso: 7,
    },
    {
        nome : "Cobra",
        peso: 14,
    },
]

//Determino quanto pesa la bici più leggera

let lightestWeight = 20;

for ( let bike of bikes){ 
    if (bike.peso <= lightestWeight){
        lightestWeight = bike.peso;
    }
    console.log(lightestWeight);
}

//stampo in console la/le bici con il peso minore
const lightestBike = bikes.filter(({peso}) => peso === lightestWeight);

console.log(lightestBike)


//! SNACK 4

let footballTeams = [
    {
        nome: "Inter", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "Leicester", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "Reggina", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "Rimini", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "DC United", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "Leyton Orient", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "PSG", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "Galatasaray", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "Hayduk Split", 
        punti: 0, 
        falliSubiti: 0,
    },
    {
        nome: "Cagliari", 
        punti: 0, 
        falliSubiti: 0,
    }
]

console.table(footballTeams);

const addValues = footballTeams.forEach((footballTeam) => {
    
    const randomPoints = Math.floor(Math.random() * 100) + 1;
    const randomFauls = Math.floor(Math.random() * 100) + 1;
    
    footballTeam.punti = randomPoints;
    footballTeam.falliSubiti = randomFauls;
})

console.table(footballTeams);


const teamFauls = footballTeams.map(({nome, falliSubiti}) => {
    return ({nome, falliSubiti})
})

console.table(teamFauls)