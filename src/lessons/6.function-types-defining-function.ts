function printName(name: string, name2: string) {
  console.log(name, name2);
}

function sum(a: number, b: number): number {
  return a + b;
}

const c = sum(1, 2);

type Person = {
  name: string;
};

function printPerson(person: Person) {
  console.log(person.name);
}

printPerson({ name: "John", age: 30 });

const person = { name: "John", age: 30 };
printPerson(person);
