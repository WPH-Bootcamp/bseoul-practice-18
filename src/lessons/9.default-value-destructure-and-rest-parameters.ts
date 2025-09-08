function printNameAndAge(name = "John", options?: { debugMode: boolean }) {
  console.log(name, options);
}

printNameAndAge();

type Options = { debugMode?: boolean };

function printNameAndAge2(name = "John", { debugMode = false }: Options = {}) {
  console.log(name, debugMode);
}

// this is wrong
function printNameAndAge3(
  name: string,
  { debugMode: boolean, indentLevel: number } = {}
) {
  console.log(name, debugMode, indentLevel);
}

// this is correct

type Option = { debugMode?: boolean; indentLevel?: number };

function printNameAndAge4(
  name: string,
  { debugMode, indentLevel }: Option = {}
) {
  console.log(name, debugMode, indentLevel);
}

type PrintNameAndAgeFunc = (
  name: string,
  options?: { debugMode?: boolean; indentLevel?: number }
) => void;

const printNameAndAge5: PrintNameAndAgeFunc = (
  name,
  { debugMode, indentLevel } = {}
) => {
  console.log(name, debugMode, indentLevel);
};

type SumFunc = (a: number, b: number) => number;

const sumFunc: SumFunc = (a, b) => a + b;

const result = sumFunc(1, 2);
