console.log("Tutto funziona (finora)")
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
