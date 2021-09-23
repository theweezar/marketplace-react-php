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
const DesktopTable = (props) => {
  const records = useSelector(state => state.table.records);
  return (
    <div className={props.thisClassName}>
      <table className="table__desktop">
        <thead className="table__header animation popup">
          <tr className="header_list">
            <td className="header_item  icon"></td>
            <td className="header_item  txhash">tx hash</td>
            <td className="header_item  action">action</td>
            <td className="header_item  block">block</td>
            <td className="header_item  age">age</td>
            <td className="header_item  status">status</td>
            <td className="header_item  from">from</td>
            <td className="header_item  direc"></td>
            <td className="header_item  to">to</td>
            <td className="header_item  value">value</td>
          </tr>
        </thead>
        <tbody className="table__container">
          {records.map((record) => (
            <TableItem type="desktop" record={record} key={record.txHash}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DesktopTable;
