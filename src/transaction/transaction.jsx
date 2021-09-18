import { useState, useEffect } from "react";
import {
  IoChevronDown,
  IoChevronBackSharp,
  IoChevronForwardSharp,
} from "react-icons/io5";
/**
 * For Container
 * @returns
 */
const Transaction = (props) => {
  /* -----CONST ------------------------ */
  const TRANSACTION_TITLE = "Transactions";
  const LIMIT_LASTEST_RECORDS = 10000;
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
    <>
      {/* --1. TRANSACTION------------------------------*/}
      <div className="transaction container-fluid">
        {/* --1.1. TITLE------------------------------  */}
        <div className="transaction__title_panel">
          {/* --1.1.1. TITLEBOX ------------- */}
          <div className="title-box col-lg-6 ">
            <h5 className="title">{TRANSACTION_TITLE}</h5>
            <div className="subtitle">
              Total {totalRecords} txns (Show{" "}
              {ThousandFormat(LIMIT_LASTEST_RECORDS)} latest records)
            </div>
          </div>
          {/* --1.1.2. PAGINATIONBOX ------------- */}
          <div
            className="pagination-box col-lg-6  p-0"
            onClick={onClickPaginationButton}
          >
            {/* --1.1.2.1 DESKTOP BOX ------------- */}
            <div className="sub-box desktop-box d-none d-lg-flex ">
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
            {/* END 1.1.2.1 */}
            {/* --1.1.2.2 MOBILE BOX ------------- */}
            <div className="sub-box mobile-box d-lg-none">
              {/* INFO BOX: LEFT */}
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
            {/* END 1.1.2.2 */}
            {/* --1.1.2.3 MODAL BOX ------------- */}
            <div className="modal-box border d-none d-lg-none">
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
            {/* END 1.1.2.3 */}
          </div>
        </div>

        {/* --1.2. TABLE------------------------------  */}
        <div className="transaction__table__box">
          {/* --1.2.1 TABLE CONTENTS IN MOBILE ----------------  */}
          <div className="transaction__table mobile d-lg-none">
            {/* --1.2.2.1 ITEM ----------------  */}
            <div className="item">
              {/* ID  */}
              <div className="field id">
                <span className="icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.106 11.553a1 1 0 011.341-.447L12 14.882l7.553-3.776a1 1 0 11.894 1.788l-8 4a1 1 0 01-.894 0l-8-4a1 1 0 01-.447-1.341z"
                      fill=""
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.106 15.553a1 1 0 011.341-.447L12 18.882l7.553-3.776a1 1 0 11.894 1.788l-8 4a1 1 0 01-.894 0l-8-4a1 1 0 01-.447-1.341z"
                      fill=""
                    ></path>
                    <path
                      d="M12 13c-.2 0-.3 0-.4-.1l-8-4C3.2 8.7 3 8.4 3 8s.2-.7.6-.9l8-4c.2-.1.6-.1.8 0l8 4c.4.2.6.5.6.9s-.2.7-.6.9l-8 4c-.1.1-.2.1-.4.1z"
                      fill=""
                    ></path>
                  </svg>
                </span>
                <span className="link">
                  <a href="#">
                    <span>0x280365d1b...</span>
                    <span>4512</span>
                  </a>
                </span>
                <span className="time">28 secs ago</span>
              </div>
              {/* ACTION */}
              <div className="field action">
                <label>Action</label>
                <div className="value">Transfer Axie</div>
              </div>
              {/* BLOCK */}
              <div className="field block">
                <label>Block</label>
                <div className="value">
                  <a href="#">
                    <span>6788618</span>
                    <span></span>
                  </a>
                </div>
              </div>
              {/* STATUS */}
              <div className="field status">
                <label>Status</label>
                <div className="value">
                  <span className="custom-badge">Success</span>
                </div>
              </div>
              {/* FROM */}
              <div className="field from">
                <label>From</label>
                <div className="value">
                  <a href="#">
                    <span>ronin:ceaa61902898bb9...</span>
                    <span>5432</span>
                  </a>
                </div>
              </div>
              {/* TO */}
              <div className="field to">
                <label>To</label>
                <div className="value">
                  <a href="#">
                    <span class="img-box">
                      <img
                        src="https://assets.axieinfinity.com/explorer/images/contract-icon/axie.png"
                        alt="Logo"
                        width="20"
                        height="20"
                      />
                    </span>
                    <span>Axie Contract</span>
                  </a>
                </div>
              </div>
              {/* VALUE */}
              <div className="field value">
                <label>Value</label>
                <div className="value">0 RON</div>
              </div>
            </div>
            {/* END 1.2.2.1 */}
          </div>
          {/* --1.2.2 TABLE CONTENTS IN DESKTOP ----------------  */}
          <table className="transaction__table d-none d-lg-block">
            <thead className="table__header">
              <tr class="header_list">
                <td class="header_item  icon"></td>
                <td class="header_item  txhash">tx hash</td>
                <td class="header_item  action">action</td>
                <td class="header_item  block">block</td>
                <td class="header_item  age">age</td>
                <td class="header_item  status">status</td>
                <td class="header_item  from">from</td>
                <td class="header_item  direc"></td>
                <td class="header_item  to">to</td>
                <td class="header_item  value">value</td>
              </tr>
            </thead>
            <tbody className="table__container">
              <tr class="table_item">
                <td className="item_content icon">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.106 11.553a1 1 0 011.341-.447L12 14.882l7.553-3.776a1 1 0 11.894 1.788l-8 4a1 1 0 01-.894 0l-8-4a1 1 0 01-.447-1.341z"
                        fill=""
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.106 15.553a1 1 0 011.341-.447L12 18.882l7.553-3.776a1 1 0 11.894 1.788l-8 4a1 1 0 01-.894 0l-8-4a1 1 0 01-.447-1.341z"
                        fill=""
                      ></path>
                      <path
                        d="M12 13c-.2 0-.3 0-.4-.1l-8-4C3.2 8.7 3 8.4 3 8s.2-.7.6-.9l8-4c.2-.1.6-.1.8 0l8 4c.4.2.6.5.6.9s-.2.7-.6.9l-8 4c-.1.1-.2.1-.4.1z"
                        fill=""
                      ></path>
                    </svg>
                  </span>
                </td>
                <td className="item_content txhash">
                  <span className="link">
                    <a href="#">
                      <span>0x280365d1b...</span>
                      <span>4512</span>
                    </a>
                  </span>
                </td>
                <td className="item_content action">Buy Axie</td>
                <td className="item_content block">
                  <a href="#">
                    <span>6788618</span>
                  </a>
                </td>
                <td className="item_content age">
                  <span className="time">28 secs ago</span>
                </td>
                <td className="item_content status">
                  <div className="value">
                    <span className="custom-badge">Success</span>
                  </div>
                </td>
                <td className="item_content from">
                  <a href="#">
                    <span>ronin:ceaa6190bb9...</span>
                    <span>5432</span>
                  </a>
                </td>
                <td className="item_content direct">
                  <svg
                    class="text-primary-5"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.396 17.018l-1.414-1.415 3.104-3.103H4.5a1 1 0 110-2h12.586l-3.104-3.104 1.414-1.414 5.518 5.518-5.518 5.518z"
                      fill=""
                    ></path>
                  </svg>
                </td>
                <td className="item_content to">
                  <a href="#">
                    <span class="img-box">
                      <img
                        src="https://assets.axieinfinity.com/explorer/images/contract-icon/axie.png"
                        alt="Logo"
                        width="20"
                        height="20"
                      />
                    </span>
                    <span>Axie Contract</span>
                  </a>
                </td>
                <td className="item_content value">0 RON</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* END 1.2*/}
      </div>
    </>
  );
};

export default Transaction;
