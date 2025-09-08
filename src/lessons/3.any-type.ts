// the downside of using any is that it disables type checking
let a: any = 4;
a = 3;
a = "hello"; // no error
a.location = "USA"; // no error
a(); // no error

// json parse
const x = JSON.parse('{"name": "John", "age": 30}');

async function fetchUser() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  return data;
}
