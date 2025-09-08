type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;

function getValue(person: Person, key: keyof Person) {
  return person[key];
}

const age = getValue({ name: "John", age: 30 }, "name");

type Mapish = { [k: string]: boolean };
type C = keyof Mapish;

const mapish: Mapish = { 1: true };
