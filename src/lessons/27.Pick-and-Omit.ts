type Todo = {
  id: string;
  name: string;
  completed: boolean;
  status: 'Complete' | 'Incomplete';
};

// memilih data sesuai dengan yang kita ingin pilih
type NewTodo = {
  name: string;
  completed: boolean;
  status: 'Complete' | 'Incomplete';
};

// omit (mengecualikan)
type NewTodo2 = Omit<Todo, 'id'> // dia punya semua property, kecuali ID

// pick (mengambil)
type NewTodo3 = Pick<Todo, 'name' | 'completed' | 'status'> // dia mengambil 3 properties

function saveTodo(todo: NewTodo): Todo {
    // simpan ke database
    return { ...todo, id: crypto.randomUUID()}
}

type updateTodo = Partial<Omit<Todo, "id">>;

function updateTodo(prev: Todo, patch: updateTodo): Todo {
    return {...prev, ...patch}
}

const created = saveTodo({name: "catatan", status: "Incomplete", completed: false})

console.log(created)

const updated = updateTodo(created, {status: "Complete", completed: true})

console.log(updated)