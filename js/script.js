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
        numPosto : (i + 1),
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

//prendo gli studenti con un voto superiore a 70
const bestStuds = students.filter(({grades}) => grades > 70);

console.table(bestStuds)

// creo una lista degli studenti con voto maggiore di 70 e id superiore a 120

const bestStudsOver120 = bestStuds.filter(({id}) => id > 120);

console.table(bestStudsOver120)

// stampo le targhe con il nome degli studenti in maiuscolo

    // TODO: imposto la funzione che mi permettere di trasformare la stringa in maiuscolo
    
    // dichiaro la funzione

    function capitalizeText (text) {
        let capitalizedWords = [];
        const words = text.split(" ");
    
        for (let word of words) {
            const capitalizedWord = word.toUpperCase();
            capitalizedWords.push(capitalizedWord);
        }
        return capitalizedWords.join(" ")
    }

    // Eseguo la funzione di MAP con all'interno la funzione capitalizeText
    const studentsTag = students.map(({name}) => {

        const capitalizedText = capitalizeText (name);

        return capitalizedText
    } )

    console.table(studentsTag)





