// DEPENDENCES
import React from "react";
import { useSelector } from "react-redux";
// COMPONENTS
import TableItem from "./table-item";
/**
 *
 * @param {*} props
 * @returns
 */
const MobileTable = (props) => {
  const records = useSelector((state) => state.table);
  return (
    <div className={props.thisClassName}>
      {/* --1.1 ITEM ----------------  */}
      <div className="table__mobile">
        {records.map((record) => (
          <TableItem record={record} key={record.txHash + "-mobile"} />
        ))}
      </div>
    </div>
  );
};

export default MobileTable;
