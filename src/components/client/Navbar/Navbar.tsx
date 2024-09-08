import { Dumbbell } from "lucide-react";

import * as styles from "./Navbar.styles";

const Navbar = () => (
  <nav className={styles.wrapper}>
    <div className={styles.content}>
      <header className={styles.header}>
        <span className={styles.icon}>
          <Dumbbell />
        </span>
        <h2 className={styles.title}>Colliery Made</h2>
      </header>
    </div>
  </nav>
);

export default Navbar;
