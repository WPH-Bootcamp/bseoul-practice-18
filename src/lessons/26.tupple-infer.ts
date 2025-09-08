// array biasa
let array: string[] = ["apple", "jeruk", "mangga"] // string
let arrayNumber: number[] = [1,2,3] // number
let arrayAny: any[] = ["testing",123, true] // any

// Tuple (bisa menggunakan banyak tipe data di dalam 1 variabel)
let tuple: [string, number, boolean] // banyak tipe data
tuple = ["apel", 10, true]

// Tuple (kita bisa menambahkan label)
type biodata = [nama: string, umur: number, email: string];
const taufik: biodata = ["Taufik", 23, "taufik@gmail.com"]