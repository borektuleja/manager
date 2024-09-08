import { withStyles } from "@/utils";

import * as styles from "./Table.styles";

const Table = withStyles("table", styles.wrapper);

export const TableHead = withStyles("thead", styles.head);

export const TableBody = withStyles("tbody", styles.body);

export const TableTr = withStyles("tr", styles.tr);

export const TableTh = withStyles("th", styles.th);

export const TableTd = withStyles("td", styles.td);

export default Table;
