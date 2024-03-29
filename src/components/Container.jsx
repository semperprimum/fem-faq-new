import styles from "./styles/Container.module.scss";

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
