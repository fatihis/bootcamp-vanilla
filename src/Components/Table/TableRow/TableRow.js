import React from "react";
import TableCell from "../TableCell/TableCell";
import "./TableRow.css";
export const TableRow = (props) => {
  return (
    <div className="table-row-container">
      <TableCell text={props.exchangeType} />
      <TableCell text={props.exchangeFrom} />
      <TableCell text={props.exchangeTo} />
      <TableCell text={props.buy} />
      <TableCell text={props.sell} />
      <TableCell text={props.diff} />
    </div>
  );
};
