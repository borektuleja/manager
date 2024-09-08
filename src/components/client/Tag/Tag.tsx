import * as styles from "./Tag.styles";

interface TagProps {
  icon: JSX.Element;
  label: string;
}

const Tag = ({ icon, label }: TagProps) => (
  <article className={styles.wrapper}>
    <header className={styles.header}>
      <span className={styles.icon}>
        {icon}
      </span>
      <h3 className={styles.label}>
        {label}
      </h3>
    </header>
  </article>
);

export default Tag;
