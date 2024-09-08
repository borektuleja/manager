import { FileSearch } from "lucide-react";

import Table, { TableBody, TableHead, TableTd, TableTh, TableTr } from "@/components/admin/Table";

import * as styles from "./ItemTable.styles";

const ItemTable = () => (
  <Table className="grid-cols-[repeat(4,_minmax(max-content,_1fr))]">
    <TableHead>
      <TableTr>
        <TableTh>Rezervace</TableTh>
        <TableTh>E-mail</TableTh>
        <TableTh>Tel. číslo</TableTh>
        <TableTh>Poznámka</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr>
        <TableTd>
          <span className={styles.icon}>
            <FileSearch />
          </span>
          <span>Bořek Tuleja</span>
        </TableTd>
        <TableTd className="justify-center">tuleja.b@seznam.cz</TableTd>
        <TableTd className="justify-center">732 601 900</TableTd>
        <TableTd className="justify-center">Nevím něco</TableTd>
      </TableTr>
    </TableBody>
  </Table>
);

export default ItemTable;
