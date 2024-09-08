import { NotebookPen } from "lucide-react";

import DesktopMenu from "./DesktopMenu";
import * as styles from "./Navbar.styles";

const Navbar = () => (
  <nav className={styles.wrapper}>
    <div className={styles.content}>
      <header className={styles.header}>
        <span className={styles.icon}>
          <NotebookPen />
        </span>
        <h2 className={styles.title}>Správce událostí</h2>
      </header>
      <DesktopMenu />
    </div>
  </nav>
);

export default Navbar;
