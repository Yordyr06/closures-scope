// Hoisting de una variable
console.log(petName);
var petName = 'Cyndie';
console.log(petName);
// si utilizamos let o const directamente presenta error



// Hoisting de una funcion
nameOfDog();

function nameOfDog() {
  console.log(`La mejor perrita se llama ${cyndie}`);
}

const cyndie = 'Cyndie';