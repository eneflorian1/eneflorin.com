import { NextResponse } from 'next/server';

import { addTodo, deleteTodo, listTodos, toggleTodo } from './store';

export async function GET() {
  return NextResponse.json({ todos: listTodos() });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { title?: string };
  if (!body.title || body.title.trim().length < 3) {
    return NextResponse.json({ error: 'Titlu invalid.' }, { status: 400 });
  }
  const todo = addTodo(body.title.trim());
  return NextResponse.json({ todo });
}

export async function PATCH(request: Request) {
  const body = (await request.json()) as { id?: string };
  if (!body.id) {
    return NextResponse.json({ error: 'ID lipsă.' }, { status: 400 });
  }
  const todo = toggleTodo(body.id);
  if (!todo) {
    return NextResponse.json({ error: 'Task inexistent.' }, { status: 404 });
  }
  return NextResponse.json({ todo });
}

export async function DELETE(request: Request) {
  const body = (await request.json()) as { id?: string };
  if (!body.id) {
    return NextResponse.json({ error: 'ID lipsă.' }, { status: 400 });
  }
  const removed = deleteTodo(body.id);
  if (!removed) {
    return NextResponse.json({ error: 'Task inexistent.' }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
