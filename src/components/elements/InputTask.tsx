import styles from "./InputTask.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputTask({ ...props }: InputProps) {
  return (
    <input
      className={styles.inputTask}
      placeholder="Adicione uma nova tarefa"
      type="text"
      name="inputTask"
      {...props}
    />
  );
}
