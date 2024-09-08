import H from "@/components/admin/H";
import HScroll from "@/components/admin/HScroll";

import * as styles from "./EditPage.styles";
import Info from "./Info";
import Item from "./Item";
import LinkTable from "./LinkTable";

const EditPage = () => (
  <section className={styles.wrapper} style={{ colorScheme: "light" }}>
    <header>
      <H>Upravit: Colliery Made Games 2024 Invitation, aneb slavíme 10 let</H>
    </header>
    <Info />
    <HScroll>
      <LinkTable />
    </HScroll>
    <Item />
  </section>
);

export default EditPage;
