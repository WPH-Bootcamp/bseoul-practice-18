// satisfies cuman ada di typescript

type Todo = {
  title: string;
  dueDate: string | Date;
  isComplete: boolean;
};

const todo: Todo = {
  title: 'sdf',
  dueDate: new Date(),
  isComplete: true,
};

todo.dueDate.getDate(); // Error: Property 'getDate' does not exist on type 'string | Date'.