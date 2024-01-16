console.log("Tutto funziona (finora)")

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
        numPosto : `${i + 1}`,
    }

    return (listedGuest);
})

console.table(guestsList)


//! SNACK 2

const students = [
    {
        id : "213",
        name : "Marco della Rovere",
        grades : "78", 
    },
    {
        id : "110",
        name : "Paola Cortellessa",
        grades : "96", 
    },
    {
        id : "250",
        name : "Andrea Mantegna",
        grades : "48", 
    },
    {
        id : "145",
        name : "Gaia Borromini",
        grades : "74", 
    },
    {
        id : "196",
        name : "Luigi Grimaldello",
        grades : "68", 
    },
    {
        id : "102",
        name : "Piero della Francesca",
        grades : "50", 
    },
    {
        id : "120",
        name : "Francesca da Polenta",
        grades : "84", 
    },
]

const bestStuds = students.filter(({grades}) => grades > 70);

console.table(bestStuds)

