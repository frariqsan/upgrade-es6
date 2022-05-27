//Iteración3 : Spread Operator
//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const copyPointsList = [...pointsList];
console.log('El array:',pointsList);
console.log('Copia:',copyPointsList);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};
console.log('El objeto:', toy);
console.log('Copia:', copyToy);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operators.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
const setPointsLists =[...pointsList1, ...pointsList2];
console.log('Primer Array:', pointsList1);
console.log('Segundo Array:', pointsList2);
console.log('Los dos juntos:',setPointsLists);
//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const newToy = {...toy1,...toyUpdate};
console.log('Objeto toy:',toy1);
console.log('Objeto toy update:', toyUpdate);
console.log('Objeto resultante al combinarlos:',newToy);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const newColors = [...colors];
newColors.splice(2,1);
console.log('Array colors:',colors);
console.log('Array newColors:',newColors);