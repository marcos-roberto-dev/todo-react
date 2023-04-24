import stylesGlobal from "../../assets/css/global.module.css";
import styles from "./HeaderTodo.module.css";

import { ButtonTask } from "../elements/ButtonTask";
import { InputTask } from "../elements/InputTask";

import todoLogo from "../../assets/images/todo.svg";
import { ChangeEvent, FormEvent, useState } from "react";

export function HeaderTodo({ onAddTodoList }: any) {
  const [inputTextTodo, setInputTextTodo] = useState("");

  function handleInputText(e: ChangeEvent<HTMLInputElement>) {
    setInputTextTodo(e.target.value);
  }

  function submitTodoForm(e: FormEvent) {
    e.preventDefault();
    onAddTodoList(inputTextTodo);
    setInputTextTodo("");
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo Todolist" />

      <form
        onSubmit={submitTodoForm}
        className={`${stylesGlobal.wrapperContainer} ${styles.taskContainer}`}
      >
        <InputTask required value={inputTextTodo} onChange={handleInputText} />
        <ButtonTask />
      </form>
    </header>
  );
}
