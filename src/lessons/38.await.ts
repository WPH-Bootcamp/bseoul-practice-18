// tanpa await

type Todo = {
    userId: number; // mandatory
    id: number; // mandatory
    title: string; // mandatory
    completed: boolean; // mandatory
}

type Random = {
    random: number
}

// promise
async function fetchTodo(): Promise<Todo>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data: Todo = await res.json()
    return {
        userId: data.userId,
        id: data.id,
        title: data.title,
        completed: data.completed
    }
}

async function mainWithoutAwait() {
    const todo = await fetchTodo()
    // console.log(todo.random)
}

async function procedureNumber() {
    return 42
}

type data = Awaited<typeof procedureNumber> // number


async function produceNumber<T>(): Promise<number> {
  return 3;
}

type DoSomethingType = Awaited<ReturnType<typeof produceNumber>>; // number

async function 

mainWithoutAwait()



// case 4
type Todo5 = {userId: number, id: number; title: string, completed: boolean}

async function fetchTodo(): Promise<Todo> {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return (await res.json()) as Todo5;
}

type TodoPromise = ReturnType<typeof fetchTodo>
type TodoResolved = Awaited<TodoPromise>

async function run() {
    const todo: TodoResolved = await fetchTodo()
    console.log(todo.completed)
}