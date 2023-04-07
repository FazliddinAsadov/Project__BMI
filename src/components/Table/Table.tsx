// @flow
import * as React from "react";
import { Key } from "react";
import { Table } from "@mantine/core";
import { capitalize } from "@web/utils/capitalize";

export type TableProps<T> = {
  values: T[];
};

const getCell = (cell: unknown) => {
  if (typeof cell !== "object") return cell;
  // @ts-ignore
  return cell?.name ? cell.name : cell?.id ? cell.id : cell;
};

export const TTable = <T extends {}>({ values }: TableProps<T>) => {
  const headValues = Object.keys(values?.[0]).map((key) => capitalize(key));
  const heads = headValues.map((head) => <th key={head}>{head}</th>);
  const bodyValues = values.map((value) => Object.values(value));
  const rows = bodyValues.map((row, i) => (
    <tr key={i}>
      {row.map((cell) => (
        <td key={cell as Key}>{getCell(cell)}</td>
      ))}
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>{heads}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
