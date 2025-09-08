// Basic Type Guards
// 1. instanceOf (fungsinya untuk mengecek tipe data dari hasil class)
// dari hasil class => Date, Error, Array

// 2. typeof (fungsinya untuk mengecek tipe data primitif)
// tipe data primitif => string, number, boolean, undefined

type Todo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean; // boolean
  description?: string; // string
  dueDate: Date | string; // date atau string
};

function extendTodo(todo: Todo) {

   // misal mau check typeof dari tipe data boolean
   if (typeof todo.isComplete === "boolean") {
        console.log(todo.isComplete)
   }
  
    //  todo.dueDate.getDate(); // Error: 'getDate' tidak ada pada tipe 'string | Date'

    // IF => mengecek apakah tipe data dari dueDate adalah date?
  if (todo.dueDate instanceof Date) {
    // fungsi dari getDate adalah untuk mengambil sebuah tanggal
    console.log(todo.dueDate); // Disini tipenya adalah date
  } else {
    console.log(todo.dueDate); // Disini tipenya adalah string
  }
}

// 2025-08-30T00:00:00.000Z // ini termasuk tipe data Date
// 2025-08-30 // ini termasuk tipe data string

// ini termasuk data yang masuk ke kondisi true (karena dueDate adalah tipe data date)
const todo1: Todo = {
    title: "Belajar type guards",
    priority: "High",
    isComplete: false,
    dueDate: new Date("2025-08-30") // ini termasuk tipe data date (akan masuk kondisi true)
}

extendTodo(todo1)

// ini termasuk data yang masuk ke kondisi false (karena dueDate adalah tipe data string)
const todo2: Todo = {
    title: "Belajar type guards",
    priority: "High",
    isComplete: false,
    dueDate: "2025-08-30" // ini termasuk tipe data string (akan masuk kondisi false)
}

extendTodo(todo2)


// case misal menggunakan instanceOf dalam bentuk array
const dueDates: (Date| string)[] = [
    new Date("2025-08-30"), // Date
    "2025-09-01", // String
    new Date("2025-10-10"), // Date
    "2025-11-15" // String
]

// dueDates akan masuk ke dalam variabel item
// item ini akan membentuk seperti ini:
// item[0] =>  new Date("2025-08-30"),
// item[1] =>  "2025-09-01"
// item[2] =>  new Date("2025-10-10"),
// item[3] => "2025-11-15" 
for (const item of dueDates) {
    if(item instanceof Date) {
        console.log("Ini adalah date")
    }else {
        console.log("Ini adalah string")
    }
}

// class array
console.log([] instanceof Array) // true

// class date
console.log(new Date() instanceof Date) // true

// misal
const arr = [1, "hai", true]
console.log(arr instanceof Array) // true

// custom date
class MyDate {} // custom 1 - ini bukan tipe Date
const customDate = new MyDate() // custom 2

console.log(customDate instanceof MyDate) // False

console.log(customDate instanceof Date) // True


// bikin sendiri
const d = new Date()
console.log(d instanceof Date) // true

// 1. instanceOf (fungsinya untuk mengecek tipe data dari hasil class)
// dari hasil class => Date, Error, Array
// ngecheck tipe dari class nya (1)

// 2. typeof (fungsinya untuk mengecek tipe data primitif)
// tipe data primitif => string, number, boolean, undefined
// ngecheck tipe data dari variabel nya (2)


class User {
    constructor(public name: string, public age: number) {}

    sayHello() {
        return `Hello, my name is ${this.name}`
    }
}

const u1  = new User("Taufik", 23) // ini true karena dibuat dari class User 
const u2 = { name: "Taufik", age: 23}  // ini false karena tidak dibuat dari class User 

console.log(u1 instanceof User) // True (ini true karena dibuat dari class User)
console.log(u2 instanceof User) // False (ini false karena tidak dibuat dari class User)