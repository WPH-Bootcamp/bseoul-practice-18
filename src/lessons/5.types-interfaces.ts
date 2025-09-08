type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
};

interface Person2 {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
}

const person: Person = {
  name: "John",
  age: 30,
  friends: [],
};

type Num = number;
type NumString = number | string;

const a: NumString = 3;

interface PersonWithAddress extends Person {
  address: {
    street: string;
  };
}

const person2: PersonWithAddress = {
  name: "John",
  age: 30,
  friends: [],
  address: {
    street: "123 Main St",
  },
};
