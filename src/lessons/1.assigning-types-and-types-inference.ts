let a: number = 2;
let b = 3; // type inference, typescript has the ability to infer the type based on the value assigned to the variable

a = "hello";
b = "hello";

let d: string;
d = "hello";

// const produces literal types
const x = 4;
const y: number = 4;
const z = "hello";

let myVar: "hello";
myVar = "hello";
myVar = "John";
