type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "John",
  age: 30,
};

user.isAdmin = true;

type UserWithDynamicProperies = {
  name: string;
  age: number;
  [key: string]: any;
};

const user2: UserWithDynamicProperies = {
  name: "John",
  age: 30,
};

user2.isAdmin = true;
user2["role"] = "admin";

interface NumberDictionary {
  name: string;
  length: number;
  [index: string]: any;
}

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["hello", "world"];

interface StringManipulator {
  (input: string): string;
  [key: string]: any;
}

const toUpperCase: StringManipulator = (input) => {
  return input.toUpperCase();
};

toUpperCase.description = "Turns the text into uppercase";

type MyFunc = (input: string) => string;

interface MyFuncWithProperties {
  (input: string): string;
  [key: string]: any;
}
