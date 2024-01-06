import styles from "./styles/Question.module.scss";
import PlusIcon from "../assets/images/icon-plus.svg?react";
import MinusIcon from "../assets/images/icon-minus.svg?react";

export function QuestionItem({ item, toggleOpen }) {
  return (
    <li className={`${styles.questionItem} ${item.isOpen ? styles.open : ""}`}>
      <button
        onClick={() => toggleOpen(item.id)}
        className={styles.questionGroup}
        aria-controls={`Question ${item.id}`}
      >
        {item.question}
        {item.isOpen ? <MinusIcon /> : <PlusIcon />}
      </button>
      <p id={`Question ${item.id}`} className={styles.answer}>
        {item.answer}
      </p>
    </li>
  );
}
