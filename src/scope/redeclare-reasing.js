// var
{
  var firstName; // Undefined
  firstName = 'Yordy';
  console.log(firstName);

  var lastName = 'Almonte'; // declarar + asignar
  lastName = 'Ruiz'; // reasignar
  console.log(lastName);

  var secondName = 'Yordy'; // declarar + asignar
  var secondName = 'Leonardo'; // redeclarar + reasignar
  console.log(secondName)
}



// let
{
  let fruit = 'Apple'; // declarar + asignar
  fruit = 'Banana'; // reasignar
  console.log(fruit);
}



// const
{
  const animal = 'dog'; // declarar + asignar

  const cars = [];
  cars.push('🚗'); // mutar
  console.log(cars);
  
  cars.pop(); // mutar
  console.log(cars);
}