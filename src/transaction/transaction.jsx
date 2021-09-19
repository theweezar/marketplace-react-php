// Dependencies
import React from "react";
// Components
import Table from './components/table';
import TitleBar from "./components/titlebar";

/**
 * Use in layout/transaction
 * Transaction includes 2 small Components:
 *     - TitleBar
 *     - Table
 * @param {*} props
 * @returns
 */
const Transaction = (props) => {
  /* -----CONST ------------------------ */
  const TRANSACTION_TITLE = "Transactions";
  const LIMIT_LASTEST_RECORDS = 10000;

  return (
    <>
      {/* --1. TRANSACTION------------------------------*/}
      <div className="transaction container-fluid">
        {/* --1.1. TITLE------------------------------  */}
        <TitleBar thisClassName="transaction__title_panel"
        title={TRANSACTION_TITLE}
        limitRecords={LIMIT_LASTEST_RECORDS}/>
        {/* --1.2. TABLE------------------------------  */}
        <Table thisClassName="transaction__table__box"/>
      </div>
    </>
  );
};

export default Transaction;
