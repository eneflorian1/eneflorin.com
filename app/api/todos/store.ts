type Todo = {
  id: string;
  title: string;
  done: boolean;
};

const defaultTodos: Todo[] = [
  { id: 'seed-1', title: 'LLM imobiliare pentru de-vanzare.ro', done: false },
  { id: 'seed-2', title: 'API voice pentru dictare anunțuri', done: false },
  { id: 'seed-3', title: 'UI/UX mobile: elimină textul inutil', done: false },
];

type TodoStore = {
  todos: Todo[];
};

const getStore = () => {
  const globalStore = globalThis as typeof globalThis & { __todoStore?: TodoStore };
  if (!globalStore.__todoStore) {
    globalStore.__todoStore = { todos: [...defaultTodos] };
  }
  return globalStore.__todoStore;
};

export const listTodos = () => {
  const store = getStore();
  return store.todos;
};

export const addTodo = (title: string) => {
  const store = getStore();
  const todo: Todo = {
    id: crypto.randomUUID(),
    title,
    done: false,
  };
  store.todos = [todo, ...store.todos];
  return todo;
};

export const toggleTodo = (id: string) => {
  const store = getStore();
  const todo = store.todos.find((item) => item.id === id);
  if (!todo) return null;
  todo.done = !todo.done;
  return todo;
};

export const deleteTodo = (id: string) => {
  const store = getStore();
  const before = store.todos.length;
  store.todos = store.todos.filter((item) => item.id !== id);
  return store.todos.length !== before;
};

export type { Todo };
