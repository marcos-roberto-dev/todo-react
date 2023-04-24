import { PlusCircle } from "phosphor-react";
import styles from "./ButtonTask.module.css";

export function ButtonTask() {
  return (
    <button className={styles.buttonTask}>
      <div>Criar</div>
      <PlusCircle size={16} />
    </button>
  );
}
