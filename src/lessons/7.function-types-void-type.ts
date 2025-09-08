function printName(name: string) {
  console.log(name);
}

let a = printName("John");

// void is the absence of the value
// undefined is a value which is not assigned

function handleClick(callback: (text: string) => void) {
  callback("hello");
}

function sum(a: number, b: number) {
  return a + b;
}

handleClick(sum);
handleClick(printName);
handleClick(console.log);
handleClick(alert);
