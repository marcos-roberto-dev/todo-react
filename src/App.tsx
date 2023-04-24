import { useState } from "react";
import stylesGlobal from "./assets/css/global.module.css";
import styles from "./App.module.css";

import { HeaderTodo } from "./components/todo/HeaderTodo";
import { HeaderDetailTodo } from "./components/todo/HeaderDetailTodo";
import { EmptyListTask } from "./components/todo/EmptylistTask";
import { ItemTask } from "./components/elements/ItemTask";

export interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  function addTodoItemList(todoItem: string) {
    setTodos([
      ...todos,
      { id: Math.random(), content: todoItem, completed: false },
    ]);
  }

  function deleteTodoItemList(todoId: number) {
    const todosWithDeleteItem = todos.filter(
      (todoItem) => todoItem.id !== todoId
    );
    setTodos(todosWithDeleteItem);
  }

  function checkTodoItemList(todoId: number) {
    const todosWithCheckedItem = todos.map((todoItem) => {
      if (todoId === todoItem.id) {
        return { ...todoItem, completed: !todoItem.completed };
      }
      return { ...todoItem };
    });
    setTodos(todosWithCheckedItem);
  }

  const totalTaskCompleted = todos.filter(
    (todoItem) => todoItem.completed
  ).length;

  return (
    <>
      <HeaderTodo onAddTodoList={addTodoItemList} />

      <main
        className={`${stylesGlobal.wrapperContainer} ${styles.taskDetailContainer}`}
      >
        <HeaderDetailTodo
          totalTaskCreated={todos.length}
          totalTaskCompleted={totalTaskCompleted}
        />

        {todos.length <= 0 ? (
          <EmptyListTask />
        ) : (
          <div className={styles.taskList}>
            {todos.map((todo) => (
              <ItemTask
                key={todo.id}
                todo={todo}
                onDeleteTodoItem={deleteTodoItemList}
                onCheckTodoItem={checkTodoItemList}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
