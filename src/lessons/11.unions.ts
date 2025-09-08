let id: string | number | boolean;
id = 7;
id = "7";
id = true;

type Todo = {
  name: string;
  status: "Complete" | "Incomplete";
};

const todo1: Todo = {
  name: "Buy milk",
  status: "Complete",
};

const todo2: Todo = {
  name: "Buy bread",
  status: "Incomplete",
};

const todo3: Todo = {
  name: "Buy cheese",
  status: "Complet",
};

type TodoComplete = {
  status: "Complete";
  completedAt: Date;
};

type TodoIncomplete = {
  status: "Incomplete";
  reason: string;
};

type TodoStatus = TodoComplete | TodoIncomplete;

const todoStatus1: TodoStatus = {
  status: "Complete",
  completedAt: new Date(),
};

const todoStatus2: TodoStatus = {
  status: "Incomplete",
  reason: "Not enough time",
};
// This is what we called as discriminated union
