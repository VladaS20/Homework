"use strict";

const todoKeys = {
  id: "ID",
  text: "TEXT",
  is_completed: "IS_completed",
  date: "date",
};

const todos = [];

const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const dateObj = new Date();
  const dateStr = `${dateObj.getDate()}.${
    dateObj.getMonth() + 1
  }.${dateObj.getFullYear()}`;

  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
    [todoKeys.date]: dateStr,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (todo === undefined) {
    console.error(`Todo with id ${todoId} not found`);
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(`Todo with id ${todoId} not found`);
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};
