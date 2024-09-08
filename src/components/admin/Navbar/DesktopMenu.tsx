import { Link } from "react-router-dom";

import { LINKS } from "@/constants";

import * as styles from "./DesktopMenu.styles";

const DesktopMenu = () => (
  <ul className={styles.wrapper}>
    {LINKS.map(({ label, path }, index) => (
      <li key={index}>
        <Link to={path} className={styles.link}>
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

export default DesktopMenu;
