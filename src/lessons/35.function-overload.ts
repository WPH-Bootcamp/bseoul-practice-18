// Overload signatures 
// kalau hanya menggunakan 1 parameter. berarti masuk ke lingkaran
function calculateArea(radius: number): number; 

// kalau hanya menggunakan 2 parameter. berarti masuk ke persegi panjang
function calculateArea(length: number, width: number): number;

// Implementation signature
function calculateArea(arg1: number, arg2?: number): number {
  if (arg2 === undefined) {
    // Jika hanya satu argumen, hitung luas lingkaran
    return Math.PI * arg1 ** 2; // Luas lingkaran: π * r²
  }
  // Jika dua argumen, hitung luas persegi panjang
  return arg1 * arg2; // Luas persegi panjang: panjang * lebar
}

// Penggunaan

// Menghitung luas lingkaran dengan radius 5
// kita hanya menggunakan 1 parameter. berarti masuk ke lingkaran
const circleArea = calculateArea(5);
console.log(circleArea); // Output: 78.53981633974483 (approx)

// Menghitung luas persegi panjang dengan panjang 10 dan lebar 4
// kita menggunakan 2 parameter. berarti masuk ke persegi panjang
const rectangleArea = calculateArea(10, 4);
console.log(rectangleArea); // Output: 40


// case 2
// Overload signatures
function sumNumbers(...args: number[]): number;
function sumNumbers(x: number[]): number;

// Implementation signature
function sumNumbers(...args: any[]): number {
  if (Array.isArray(args[0])) {
    // Jika argumen pertama adalah array
    return args[0].reduce((sum: number, num: number) => sum + num, 0);
  }
  // Jika argumen adalah beberapa angka
  return args.reduce((sum: number, num: number) => sum + num, 0);
}

// Penggunaan

// Menggunakan rest parameters
const sum1 = sumNumbers(1, 2, 3, 4);
console.log(sum1); // Output: 10

// Menggunakan array
const sum2 = sumNumbers([5, 10, 15]);
console.log(sum2); // Output: 30