type Person = {
  name: string;
  skillLevel: "Beginner" | "Intermediate" | "Expert";
};

const person: Person = {
  name: "John",
  skillLevel: "Expert",
};

function printSkillLevel(skillLevel: Person["skillLevel"]) {
  console.log(skillLevel);
}

printSkillLevel("Expert");

// type PeopleGroupedBySkillLevel = {
//   [index: string]: Person[];
// };

// const groupBySkills1: PeopleGroupedBySkillLevel = {
//   Beginner: [person],
//   Intermediate: [],
//   Expert: [person],
//   Master: [person],
//   "Not a person": [],
// };

// mapped type
type PeopleGroupedBySkillLevel = {
  [index in Person["skillLevel"]]: Person[];
};

const groupBySkills: PeopleGroupedBySkillLevel = {
  Beginner: [person],
  Intermediate: [],
  Expert: [person],
  Master: [person],
};

type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarArray = Car[];
type CarType = CarArray[number];

const myArray = [100, 101, "hello", true, false];
type MyArrayType = (typeof myArray)[number];

type Employee = {
  name: string;
  age: number;
  salary: number;
  isManager: boolean;
};

// wrong
// type EmployeeValues = Employee["name" | "age" | "salary" | "isManager"];

// correct
type EmployeeValues = Employee[keyof Employee];

const personArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type ArrayItemType =
  (typeof personArray)[number][keyof (typeof personArray)[number]];

type ThePerson = (typeof personArray)[number];
type PersonKeysValue = ThePerson[keyof ThePerson];

const key = "age";
type Age = Employee[typeof key];
