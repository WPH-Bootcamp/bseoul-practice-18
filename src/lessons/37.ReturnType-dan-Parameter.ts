function checkLength(a: string) {
  console.log(typeof a.length)
  return a.length; // number
}

function randomNumber() {
    return Math.random()
}

// Manual
type ReturnOfCheckLength<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;


// Manual
type ReturnOfRandomNumber<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type Result = ReturnOfCheckLength<typeof checkLength>; // number

type ResultRandom = ReturnOfRandomNumber<typeof randomNumber>; 

// ReturnType untuk generate type dari sebuah function
type MyType = ReturnType<typeof checkLength> // number


const s1 = "Hello"
const len1: Result = checkLength(s1)
const randomNumberResult: ResultRandom = randomNumber()

console.log(typeof len1)
console.log(randomNumberResult)