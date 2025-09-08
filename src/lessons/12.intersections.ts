// type Person = {
//   name: string;
//   age: number;
// };

// type PersonWithId = Person & { id: string };

// const person: PersonWithId = {
//   id: "sdfsdf",
//   name: "John",
//   age: 30,
// };

interface Person {
  name: string;
  age: number;
}

interface PersonWithId extends Person {
  id: string;
}

const person2: PersonWithId = {
  id: "sdfsdf",
  name: "John",
  age: 30,
};

interface PersonWithAddress extends PersonWithId, Person {
  address: string;
}

const person3: PersonWithAddress = {
  id: "sdfsdf",
  name: "John",
  age: 30,
  address: "123 Main St",
};

type Profile = number & { id: string };
const profile1: Profile = 123;
const profile2: Profile = { id: "asd" };

type Location = { id: string } & { id: number };

// fails
const location: Location = {
  id: "asdasd",
};

const location2: Location = {
  id: 123,
};

// fails
interface PersonLocation {
  id: string;
}

interface PersonInfo extends PersonLocation {
  id: number;
}
