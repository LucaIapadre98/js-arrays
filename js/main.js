const teachers = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ]; 
  console.table(teachers);
  
  // NON MODIFICARE QUESTA VARIABILE
  
  // 1. Utilizzando un indice sull'array teachers, cambia il valore della
  // variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
  for(let i=0 ; i < teachers.length; i++){
    console.log(teachers [3]);
  }
  const fourthTeacher = teachers [3];
  console.log(fourthTeacher);
  
  // 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
const primes = ['Nathan','Ed','Fabio','Phil','Carlo','Lewis','Luca']
primes [4] = 'Patrick';
console.table(primes);
  
  // 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
  const lastTeacher = ['Nathan','Ed','Fabio','Phil','Carlo','Lewis','Luca'];
  lastTeacher.pop(6);
  console.table(lastTeacher);
  
  // 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
  const firstTeacher =  ['Nathan','Ed','Fabio','Phil','Carlo','Lewis','Luca'];
  firstTeacher.shift(0);
  console.table(firstTeacher);
  
  // 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
  const teacher = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ]; 
  teacher.push('Vanessa') ;
  console.table(teacher);

  // 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
 const teachers1 = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ]; 
  teachers1.unshift('Sarah')
  console.table(teachers1);
  
  // 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
  // e salvalo nella variabile lewisIndex
  const teachers2 = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ]; 
  console.table(teachers2);

  console.log( teachers2[5])
  const lewisIndex = (teachers2[5]);
  
  // 8. Verifica se l'array teachers è vuoto
  // e salva il risultato nella variabile isTeachersEmpty
  const teachers3 = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ]; 

 if(teachers3.length === 0) {
    console.log(teachers3);
 } 
 else if (teachers3 !== 0){
    console.log(teachers3);
 }
 const isTeachersEmpty = teachers3  !== 0;
 console.log(isTeachersEmpty);
 
  