// Syntax error
/*
  for (let i = 0; < 10; i++) {
    console.log(i);
  }
*/


// Type error
/*
  const test = 1;
  test = 3;
*/


// Reference error
/*
  for(let i = 0; i < 10; i++) {
    console.log(non_existing_variable);
  }
*/


// Logical error in function n ^ n
/*
  function wrongRaisedTo(number) {
    let result = 1;
    for(let counter = 0; counter <= number; counter++) {
      result *= number;
    }
    return result;
  }
  let number = wrongRaisedTo(3);
  console.log(number);
*/