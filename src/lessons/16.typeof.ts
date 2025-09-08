console.log(typeof 1);

const person = {
  name: "John",
  age: 30,
};

const people: (typeof person)[] = [];

people.push(person);
people.push({ name: "Jane", age: 25 });

function sum(a: number, b: number) {
  return a + b;
}

const myNumbers = [1, 2, 3, "hello"];
type NumberOrStringArray = typeof myNumbers;
