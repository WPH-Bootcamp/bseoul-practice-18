// kita ambil data dari API
// tapi kita tidak tipe datanya apa
// kita casting untuk menentukan tipe data tersebut

//https://jsonplaceholder.typicode.com/todos/1 

// response api:

// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// }

// kita bisa nasukin data berdasarkan type ini.. 
// sebelum kita nentuin type, kita harus tau isi dari API nya dulu
type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

type User = {
    id: number;
    name: string;
    email: string;
}


// Tujuan bikin type adalah biar data konsisten + data yang diambil adalah seperlunya

// tahun 2024
// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// }

// tahun 2025
// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// "nama": "Taufik"
// "email": "taufikmulyawan@gmail.com"
// }


// pake any bisa (tapi tidak rekomendasi)

async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json()

    // kita lakuin casting:
    const users = data as User // ini casting

    console.log(users)
}

async function getTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json()

    // kita lakuin casting:
    const todo = data as Todo // ini casting

    console.log(todo.id) // aman
    console.log(todo.title) // aman
    console.log(todo.completed) // aman
    console.log(todo.userId) // tidak aman (karena tidak ada properties dalam fungsi types)
}


async function fetchJson<T>(url: string): Promise<T> {
    const res = await fetch(url)   
    return await res.json() as T // casting nya disini
}

async function getTodoDynamic() {
    // await fetch json nya berdasarkan type Todo yang kita buat
    const todo = await fetchJson<Todo>("https://jsonplaceholder.typicode.com/todos/1");
    
    console.log(todo.id) // aman
    console.log(todo.title) // aman
    console.log(todo.completed) // aman
    console.log(todo.userId) // tidak aman (karena tidak ada properties dalam fungsi types)
}