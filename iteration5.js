//Iteracion5 : Filter

//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adults = ages.filter(adult => adult > 18);
console.log(adults);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.
const parAge= ages.filter(age => age%2 ===0);
console.log(parAge);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed == 'League of Legends');
console.log(lolStreamers);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
//usar la funcion .includes() para la comprobación.

const listStreamers = streamers.filter(streamer=> streamer.name.includes('u'));
console.log('Estos son los streamers con la letra u:', listStreamers);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//.age sea mayor que 35.
const myListStreamers = streamers
    .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
    .map(person =>{
        if (person.age > 35) {
                person.gameMorePlayed = person.gameMorePlayed.toUpperCase(); //toUpperCase no modifica el string
            
        }
        return person;
    });
    console.log(myListStreamers);