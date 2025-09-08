const person = { name: "John", age: 30 };
person.isProgrammer = true;

const person2: { name: string; age: number } = {
  name: "John",
  age: 30,
};

const person3: { name: string; age: number; isProgrammer: boolean } = {
  name: "John",
  age: 30,
};

const person4: { name: string; age: number; isProgrammer?: boolean } = {
  name: "John",
  age: 30,
};

person4.isProgrammer = true;
