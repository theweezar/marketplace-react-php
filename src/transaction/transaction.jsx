import { useState, useEffect } from "react";
import { IoChevronDown, IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
/**
 * For Container
 * @returns
 */
const Transaction = (props) => {
  /* -----CONST ------------------------ */
  const TRANSACTION_TITLE = "Transactions";
  const LIMIT_LASTEST_RECORDS = "10,000";
  /* -----STATES ------------------------ */
  const [records, setRecords] = useState(25);
  const [totalRecords, setTotalRecords] = useState(61389631);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(400);

  const [openPaginationModal, setOpenPaginationModal] = useState(false);

  useEffect(() => {
    console.log(page);
    console.log(totalRecords);
    console.log(records);
    console.log(totalPage);
    console.log(openPaginationModal);
  }, [page, totalRecords, records, totalPage, openPaginationModal]);

  const onClickPaginationButton = () => {
    setOpenPaginationModal(!openPaginationModal);
  };
  return (
    <>
      {/* --1. TRANSACTION------------------------------*/}
      <div className="transaction container-fluid">
        {/* --1.1. TITLE------------------------------  */}
        <div className="transaction__title_panel">
          {/* --1.1.1. TITLEBOX ------------- */}
          <div className="title-box">
            <h5 className="title">{TRANSACTION_TITLE}</h5>
            <div className="subtitle">
              Total {totalRecords} txns (Show {LIMIT_LASTEST_RECORDS} latest
              records)
            </div>
          </div>

          {/* --1.1.2. PAGINATIONBOX ------------- */}
          <div className="pagination-box" onClick={onClickPaginationButton}>
            <div className="sub-box desktop-box"></div>
            <div className="sub-box mobile-box">
              <div className="info-box">
                <div class="label-records-per-page">
                  <span className="bold">{records}</span> Records per page
                </div>
                <div class="label-page">
                  Pages
                  <span className="bold">
                    {page}/{totalPage}
                  </span>
                </div>
              </div>
              <div className="btn-box">
                <button className="btn pagination-btn">
                  <svg color="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 6.5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12.6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 18.5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                      fill=""
                    ></path>
                    <path
                      d="M7.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 15.1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                      fill=""
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="modal-box border">
              <div class="limit-records-box">
                <span> Show </span>
                <span className="select-record-box">
                  <div>{records}</div>
                  <div>
                    <IoChevronDown />
                  </div>
                </span>
                <span> Records </span>
              </div>
              <div class="change-page-box">
                <button className="btn btn-text active">First</button>
                <button className="btn btn-svg active">
                  <IoChevronBackSharp />
                </button>
                <span className="page">
                  {page}/{totalPage}
                </span>
                <button className="btn btn-svg">
                  <IoChevronForwardSharp />
                </button>
                <button className="btn btn-text">Last</button>
              </div>
            </div>
          </div>
        </div>

        {/* --1.2. TABLE------------------------------  */}
        <div>Table</div>
      </div>
    </>
  );
};

export default Transaction;
