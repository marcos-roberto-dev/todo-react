import styles from "./HeaderDetailTodo.module.css";

interface HeaderDetailTodoProps {
  totalTaskCreated: number;
  totalTaskCompleted: number;
}

export function HeaderDetailTodo({
  totalTaskCreated,
  totalTaskCompleted,
}: HeaderDetailTodoProps) {
  return (
    <header>
      <div className={styles.labelDetailTask}>
        <strong className={styles.todoTask}>Tarefas Criadas</strong>
        <div>{totalTaskCreated}</div>
      </div>
      {totalTaskCreated > 0 && (
        <div className={styles.labelDetailTask}>
          <strong className={styles.doneTask}>Concluidas</strong>
          <div>
            {totalTaskCompleted} de {totalTaskCreated}
          </div>
        </div>
      )}
    </header>
  );
}
