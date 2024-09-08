import { Mail, Phone, User } from "lucide-react";
import React from "react";

import Button from "@/components/admin/Button";
import Field from "@/components/admin/Field";
import HScroll from "@/components/admin/HScroll";
import Modal, { ModalContainer, ModalForm, ModalGroup, ModalTitle } from "@/components/admin/Modal";
import Textarea from "@/components/admin/Textarea";

import ItemTable from "./ItemTable";

const Item = () => (
  <React.Fragment>
    <HScroll>
      <ItemTable />
    </HScroll>
    <Modal show={false}>
      <ModalContainer>
        <header>
          <ModalTitle>Upravit rezervaci</ModalTitle>
        </header>
        <ModalForm>
          <Field icon={<User />} type="text" placeholder="Jméno a příjmení" required />
          <Field icon={<Mail />} type="email" placeholder="E-mail" required />
          <Field icon={<Phone />} type="tel" placeholder="Tel. číslo" />
          <Textarea placeholder="Poznámka k registraci" rows={4} />
          <Button type="submit">Uložit změny</Button>
        </ModalForm>
        <ModalGroup>
          <Button type="button" className="text-rose-800">Smazat rezervaci</Button>
          <Button type="button">Zpět</Button>
        </ModalGroup>
      </ModalContainer>
    </Modal>
  </React.Fragment>
);

export default Item;
