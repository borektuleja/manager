import { CalendarDays, NotebookPen, Users } from "lucide-react";

import Button from "@/components/admin/Button";
import Field from "@/components/admin/Field";
import H from "@/components/admin/H";

import * as styles from "./MagePage.styles";

const MakePage = () => (
  <section className={styles.wrapper}>
    <header>
      <H>Vytvořit událost</H>
    </header>
    <form className={styles.form}>
      <Field icon={<NotebookPen />} type="text" placeholder="Název" required />
      <Field icon={<Users />} type="number" placeholder="Počet míst" />
      <Field icon={<CalendarDays />} type="date" placeholder="Datum konání" required style={{ colorScheme: "light" }} />
      <Button type="submit">Vytvořit událost</Button>
    </form>
  </section>
);

export default MakePage;
