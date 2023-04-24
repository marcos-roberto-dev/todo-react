import { Trash, Check } from "phosphor-react";
import styles from "./ItemTask.module.css";
import { TodoItem } from "../../App";

interface ItemTaskProps {
  onDeleteTodoItem: (id: number) => void;
  onCheckTodoItem: (id: number) => void;
  todo: TodoItem;
}

export function ItemTask({
  onCheckTodoItem,
  onDeleteTodoItem,
  todo,
}: ItemTaskProps) {
  function handleChangeCheckBox() {
    onCheckTodoItem(todo.id);
  }

  function handleDeleteTodoItem() {
    onDeleteTodoItem(todo.id);
  }

  return (
    <div className={styles.itemTask}>
      <button
        className={todo.completed ? styles.check : styles.unCheck}
        onClick={handleChangeCheckBox}
      >
        {todo.completed && <Check size={12} />}
      </button>

      <p className={todo.completed ? styles.contentCheck : styles.content}>
        {todo.content}
      </p>
      <button className={styles.delete} onClick={handleDeleteTodoItem}>
        <Trash size={24} />
      </button>
    </div>
  );
}
