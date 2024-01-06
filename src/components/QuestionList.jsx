import { QuestionItem } from "../components";
import styles from "./styles/Question.module.scss";
import { useState } from "react";
import dataJSON from "../data.json";

export function QuestionList() {
  const [data, setData] = useState(dataJSON.questions);

  const toggleOpen = (id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      });
    });
  };

  return (
    <ul role="list" className={styles.list}>
      {data.map((item) => (
        <QuestionItem key={item.id} item={item} toggleOpen={toggleOpen} />
      ))}
    </ul>
  );
}
