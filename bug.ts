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

//Uncommon error: Type narrowing in conditional types
function processString(input: string | number): string {
  if (typeof input === 'string') {
    return input.toUpperCase(); //This works fine
  } else {
    return input.toString(); //This works too, but the type is not correctly narrowed in this conditional block. It should only be number after the check, so we can improve it.
  }
}

console.log(processString("hello")); //Prints HELLO to the console
console.log(processString(123)); //Prints 123 to the console