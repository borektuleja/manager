import { CalendarDays, NotebookPen, Users } from "lucide-react";
import React from "react";

import Button from "@/components/admin/Button";
import Field from "@/components/admin/Field";
import HScroll from "@/components/admin/HScroll";
import Modal, { ModalContainer, ModalForm, ModalGroup, ModalTitle } from "@/components/admin/Modal";

import InfoTable from "./InfoTable";

const Info = () => (
  <React.Fragment>
    <HScroll>
      <InfoTable />
    </HScroll>
    <Modal show={false}>
      <ModalContainer>
        <header>
          <ModalTitle>Upravit událost</ModalTitle>
        </header>
        <ModalForm>
          <Field icon={<NotebookPen />} type="text" placeholder="Název" required />
          <Field icon={<Users />} type="number" placeholder="Počet míst" />
          <Field icon={<CalendarDays />} type="date" placeholder="Datum konání" required />
          <Button type="submit">Uložit změny</Button>
        </ModalForm>
        <ModalGroup>
          <Button type="button" className="text-rose-800">Smazat událost</Button>
          <Button type="button">Zpět</Button>
        </ModalGroup>
      </ModalContainer>
    </Modal>
  </React.Fragment>
);

export default Info;
