function printNameAndAge(name: string, options: { debug: boolean }) {
  console.log(name, options);
}

printNameAndAge("John"); // error
printNameAndAge("John", { debug: true });

function printNameAndAge2(name: string, options?: { debug: boolean }) {
  console.log(name, options);
}

printNameAndAge2("John");
printNameAndAge2("John", { debug: true });
printNameAndAge2("John", {}); // error

function printNameAndAge3(name: string, options?: { debug?: boolean }) {
  console.log(name, options);
}

printNameAndAge3("John");
printNameAndAge3("John", { debug: true });
printNameAndAge3("John", {});
