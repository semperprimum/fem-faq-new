import StarIcon from "../assets/images/icon-star.svg?react";
import styles from "./styles/Heading.module.scss";

export function Heading({ children }) {
  return (
    <div className={styles.wrapper}>
      <StarIcon className={styles.icon} />
      <h1 className={styles.heading}>{children}</h1>
    </div>
  );
}
