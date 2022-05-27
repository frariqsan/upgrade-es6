//Iteration7: Reduce
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const sumTotal = exams.reduce((acc,exam) => acc += exam.score,0);
console.log(sumTotal);

//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
//alumnos que esten aprobados usando la función .reduce().

const totalPassed = exams.reduce((acc,exam)=> {
    exam.score >= 5 ? acc += exam.score : 0;
    return acc;
},0)
console.log(totalPassed);

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const totalMedia = exams.reduce((acc,exam) => {
    acc += exam.score;
    return acc;
},0)
console.log(totalMedia/exams.length);