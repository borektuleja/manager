import { FileSearch } from "lucide-react";
import { Link } from "react-router-dom";

import Table, { TableBody, TableHead, TableTd, TableTh, TableTr } from "@/components/admin/Table";

import * as styles from "./InfoTable.styles";

const InfoTable = () => (
  <Table className="grid-cols-[minmax(max-content,_1fr)_160px_160px]">
    <TableHead>
      <TableTr>
        <TableTh>Název</TableTh>
        <TableTh>Datum</TableTh>
        <TableTh>Rezervace</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr>
        <TableTd>
          <span className={styles.icon}>
            <FileSearch />
          </span>
          <Link to="/upravit/1">Colliery Made Games 2024 Invitation, aneb slavíme 10 let</Link>
        </TableTd>
        <TableTd className="justify-center">14. 9. 2024</TableTd>
        <TableTd className="justify-center">34</TableTd>
      </TableTr>
      <TableTr>
        <TableTd>
          <span className={styles.icon}>
            <FileSearch />
          </span>
          <Link to="/upravit/1">Christmas 2025</Link>
        </TableTd>
        <TableTd className="justify-center">22. 12. 2024</TableTd>
        <TableTd className="justify-center">18</TableTd>
      </TableTr>
    </TableBody>
  </Table>
);

export default InfoTable;
