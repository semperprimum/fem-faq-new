import styles from "./styles/Question.module.scss";
import PlusIcon from "../assets/images/icon-plus.svg?react";
import MinusIcon from "../assets/images/icon-minus.svg?react";

export function QuestionItem({ item, toggleOpen }) {
  return (
    <li className={`${styles.questionItem} ${item.isOpen ? styles.open : ""}`}>
      <button
        onClick={() => toggleOpen(item.id)}
        className={styles.questionGroup}
      >
        <h2 className={styles.question}>{item.question}</h2>
        <div className={styles.toggle}>
          {item.isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>
      <p className={styles.answer}>{item.answer}</p>
    </li>
  );
}
