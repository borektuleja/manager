import { File } from "lucide-react";
import { Link } from "react-router-dom";

import Table, { TableBody, TableHead, TableTd, TableTh, TableTr } from "@/components/admin/Table";

const LinkTable = () => (
  <Table className="grid-cols-[minmax(max-content,_1fr)_320px]">
    <TableHead>
      <TableTr>
        <TableTh>Odkaz k registraci</TableTh>
        <TableTh>Stáhnout rezervace</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr>
        <TableTd>
          <Link to="/rezervovat/1">https://collierycrossfit.com/udalosti/rezervovat/5</Link>
        </TableTd>
        <TableTd className="justify-center">
          <File />
        </TableTd>
      </TableTr>
    </TableBody>
  </Table>
);

export default LinkTable;
