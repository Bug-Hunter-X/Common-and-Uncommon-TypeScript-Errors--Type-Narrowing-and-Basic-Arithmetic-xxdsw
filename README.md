# Common and Uncommon TypeScript Errors

This repository demonstrates a couple of TypeScript examples: one showcasing basic arithmetic operations and the other highlighting a subtle error related to type narrowing in conditional types.

## Common Error: Basic Arithmetic

The `add` and `subtract` functions exemplify basic arithmetic operations in TypeScript.  These are straightforward and unlikely to cause issues for most developers.

## Uncommon Error: Type Narrowing in Conditional Types

The `processString` function illustrates an area where type narrowing might be unexpectedly incomplete. While the code functions correctly, it doesn't fully utilize TypeScript's type system to refine the type of `input` after checking `typeof input === 'string'`.  This could lead to potential issues in larger, more complex programs where type safety is crucial.

The solution file (`bugSolution.ts`) shows a refined version of the function that properly uses type narrowing and helps to improve type safety of the `processString` function.