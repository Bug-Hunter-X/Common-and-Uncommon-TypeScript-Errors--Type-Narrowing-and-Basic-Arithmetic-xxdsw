function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
console.log(result); //Prints 8 to the console

result = subtract(10, 5); //result is 5
console.log(result); //Prints 5 to the console

//Improved type narrowing in conditional types
function processString(input: string | number): string {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else {
    return input.toString(); //Type is correctly narrowed here, but we can improve it.
  }
}

console.log(processString("hello")); //Prints HELLO to the console
console.log(processString(123)); //Prints 123 to the console

//Further improvement using type assertion for better clarity
function processStringImproved(input: string | number): string {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else {
    return (input as number).toString(); //Type assertion for clarity
  }
}

console.log(processStringImproved("hello")); //Prints HELLO to the console
console.log(processStringImproved(123)); //Prints 123 to the console