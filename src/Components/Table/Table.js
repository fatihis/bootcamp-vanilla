import React from "react";
import data from "../../data";
import { TableRow } from "../TableRow/TableRow";

export default function Table() {
  return (
    <div className="home-table-container">
      {data.currencies.map((element) => {
        return (
          <TableRow
            exchangeType={element.exchangeType}
            buy={element.buy}
            sell={element.sell}
            diff={element.diff}
            exchangeFrom={element.exchangeFrom}
            exchangeTo={element.exchangeTo}
          ></TableRow>
        );
      })}
    </div>
  );
}
