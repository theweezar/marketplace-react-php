// Dependencies
import React from 'react';
// Components
/**
 * 
 * @param {*} props 
 * @returns 
 */
function Table(props) {
    // =STATES=================================================
    // =FUNC=================================================
    return (
        <div className={props.thisClassName}>
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
                    <span className="img-box">
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
              <tr className="table_item">
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
                    className="text-primary-5"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.396 17.018l-1.414-1.415 3.104-3.103H4.5a1 1 0 110-2h12.586l-3.104-3.104 1.414-1.414 5.518 5.518-5.518 5.518z"
                      fill=""
                    ></path>
                  </svg>
                </td>
                <td className="item_content to">
                  <a href="#">
                    <span className="img-box">
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
    );
}

export default Table;