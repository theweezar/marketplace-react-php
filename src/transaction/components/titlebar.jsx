// Dependencies
import { useState, useEffect } from "react";
import {
  IoChevronDown,
  IoChevronBackSharp,
  IoChevronForwardSharp,
} from "react-icons/io5";
// Components
/**
 *
 * @param {*} props
 * @returns
 */
function TitleBar(props) {
  // =STATES=================================================
  const TRANSACTION_TITLE = props.title;
  const LIMIT_LASTEST_RECORDS = props.limitRecords;

  const [records, setRecords] = useState(25);
  const [totalRecords, setTotalRecords] = useState(61389631);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(400);

  const [openPaginationModal, setOpenPaginationModal] = useState(false);
  // =FUNC=================================================
  
  useEffect(() => {
    setTotalRecords(ThousandFormat(totalRecords));
  }, [totalRecords]);

  const onClickPaginationButton = () => {
    setOpenPaginationModal(!openPaginationModal);
  };

  const ThousandFormat = (x, delimiter = ",") => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={props.thisClassName}>
      {/* --1. TITLEBOX ------------- */}
      <div className="title-box col-lg-6 ">
        <h5 className="title">{TRANSACTION_TITLE}</h5>
        <div className="subtitle">
          Total {totalRecords} txns (Show{" "}
          {ThousandFormat(LIMIT_LASTEST_RECORDS)} latest records)
        </div>
      </div>
      {/* --2 PAGINATIONBOX ------------- */}
      <div
        className="pagination-box col-lg-6  p-0"
        onClick={onClickPaginationButton}
      >
        {/* --2.1 DESKTOP BOX ------------- */}
        <div className="sub-box desktop-box d-none d-lg-flex ">
          <div className="limit-records-box">
            <span> Show </span>
            <span className="select-record-box">
              <div>{records}</div>
              <div>
                <IoChevronDown />
              </div>
            </span>
            <span> Records </span>
          </div>
          <div className="change-page-box">
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
        
        {/* --2.2 MOBILE BOX ------------- */}
        <div className="sub-box mobile-box d-lg-none">
          {/* INFO BOX: LEFT */}
          <div className="info-box">
            <div className="label-records-per-page">
              <span className="bold">{records}</span> Records per page
            </div>
            <div className="label-page">
              Pages
              <span className="bold">
                {page}/{totalPage}
              </span>
            </div>
          </div>
          {/* BUTTON BOX: RIGHT*/}
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
        
        {/* --2.3 MODAL BOX ------------- */}
        <div className="modal-box border d-none d-lg-none">
          <div className="limit-records-box">
            <span> Show </span>
            <span className="select-record-box">
              <div>{records}</div>
              <div>
                <IoChevronDown />
              </div>
            </span>
            <span> Records </span>
          </div>
          <div className="change-page-box">
            <button className="btn btn-text active">First</button>
            <button className="btn btn-svg active">
              <IoChevronBackSharp />
            </button>
            <span className="page">
              {page}
              <span>/</span>
              {totalPage}
            </span>
            <button className="btn btn-svg">
              <IoChevronForwardSharp />
            </button>
            <button className="btn btn-text">Last</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TitleBar;
