import { ClipboardText } from "phosphor-react";

import styles from "./EmptylistTask.module.css";

export function EmptyListTask() {
  return (
    <section className={styles.emptyListTask}>
      <div>
        <ClipboardText size={56} />
      </div>
      <div className={styles.emptyListTaskText}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <div>Crie tarefas e organize seus itens a fazer</div>
      </div>
    </section>
  );
}
