// El function scope tambien es conocido como local scope.

function greeting() {
    let userName = 'Ana'; 
    console.log(userName);
  
    if (userName === 'Ana') {
      console.log(`Hello ${userName}!`)
    }
  
  }
  
  greeting();
  console.log(userName);