import { TextSearch } from "lucide-react";

import Field from "@/components/admin/Field";
import H from "@/components/admin/H";
import HScroll from "@/components/admin/HScroll";

import * as styles from "./HomePage.styles";
import InfoTable from "./InfoTable";

const HomePage = () => (
  <section className={styles.wrapper} style={{ colorScheme: "light" }}>
    <header>
      <H>Seznam událostí</H>
    </header>
    <form className={styles.form}>
      <Field icon={<TextSearch/>} type="text" placeholder="Vyhledat událost" />
    </form>
    <HScroll>
      <InfoTable />
    </HScroll>
  </section>
);

export default HomePage;
