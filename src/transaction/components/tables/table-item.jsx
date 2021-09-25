// DEPENDENCES
import React from "react";
// COMPONENTS
/**
 *
 * @param {*} props
 * @returns
 */
function TableItem(props) {
  const type = props.type;
  const { txHash, action, block, age, status, from, to, value } = {
    ...props.record,
  };
  const txHashTextLimit = 12;
  const StatusTextLimit = 17;
  const animationClass = props.animationClass;
  return type === "desktop" ? (
    <tr className={"table_item " + (animationClass ? "animation "+animationClass : "" )}>
      <td className="item_content icon">
        <span className="icon">
          <Symbol />
        </span>
      </td>
      <td className="item_content txhash">
        <span className="link">
          <a href="#">
            {txHash.length > txHashTextLimit ? (
              <>
                <span>{txHash.slice(0, txHashTextLimit) + "..."}</span>
                <span>{txHash.slice(-4)}</span>
              </>
            ) : (
              <span>{txHash}</span>
            )}
          </a>
        </span>
      </td>
      <td className="item_content action">{action}</td>
      <td className="item_content block">
        <a href="#">
          <span>{block}</span>
        </a>
      </td>
      <td className="item_content age">
        <span className="time">{age}</span>
      </td>
      <td className="item_content status">
        <div className="value">
          <span className={"custom-badge " + status}>{status}</span>
        </div>
      </td>
      <td className="item_content from">
        <a href="#">
          {from.length > StatusTextLimit ? (
            <>
              <span>{from.slice(0, StatusTextLimit) + "..."}</span>
              <span>{from.slice(-4)}</span>
            </>
          ) : (
            <span>{from}</span>
          )}
        </a>
      </td>
      <td className="item_content direct">
        <Arrow />
      </td>
      <td className="item_content to">
        <a href="#">
          <span className="img-box">
            {to === "Axie Contract" ? <Axie /> : ""}
          </span>
          <span>{to}</span>
        </a>
      </td>
      <td className="item_content value">{value} RON</td>
    </tr>
  ) : (
    <div className={"item "+ (animationClass ? "animation "+animationClass : "" )}>
      {/* ID  */}
      <div className="field id">
        <span className="icon">
          <Symbol />
        </span>
        <span className="link">
          <a href="#">
            {txHash.length > txHashTextLimit ? (
              <>
                <span>{txHash.slice(0, txHashTextLimit) + "..."}</span>
                <span>{txHash.slice(-4)}</span>
              </>
            ) : (
              <span>{txHash}</span>
            )}
          </a>
        </span>
        <span className="time">{age}</span>
      </div>
      {/* ACTION */}
      <div className="field action">
        <label>Action</label>
        <div className="value">{action}</div>
      </div>
      {/* BLOCK */}
      <div className="field block">
        <label>Block</label>
        <div className="value">
          <a href="#">
          <span>{block}</span>
          </a>
        </div>
      </div>
      {/* STATUS */}
      <div className="field status">
        <label>Status</label>
        <div className="value">
          <span className={"custom-badge " + status}>{status}</span>
        </div>
      </div>
      {/* FROM */}
      <div className="field from">
        <label>From</label>
        <div className="value">
          <a href="#">
            {from.length > StatusTextLimit ? (
              <>
                <span>{from.slice(0, StatusTextLimit) + "..."}</span>
                <span>{from.slice(-4)}</span>
              </>
            ) : (
              <span>{from}</span>
            )}
          </a>
        </div>
      </div>
      {/* TO */}
      <div className="field to">
        <label>To</label>
        <div className="value">
          <a href="#">
            <span className="img-box">
            {to === "Axie Contract" ? <Axie /> : ""}
            </span>
            <span>{to}</span>
          </a>
        </div>
      </div>
      {/* VALUE */}
      <div className="field value">
        <label>Value</label>
        <div className="value">{value} RON</div>
      </div>
    </div>
  );
}
// Common
function Symbol() {
  return (
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
  );
}

function Arrow() {
  return (
    <svg className="text-primary-5" viewBox="0 0 24 24" width="24" height="24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.396 17.018l-1.414-1.415 3.104-3.103H4.5a1 1 0 110-2h12.586l-3.104-3.104 1.414-1.414 5.518 5.518-5.518 5.518z"
        fill=""
      ></path>
    </svg>
  );
}
// Specific
function Axie() {
  return (
    <img
      src="https://assets.axieinfinity.com/explorer/images/contract-icon/axie.png"
      alt="Logo"
      width="20"
      height="20"
    />
  );
}

export default TableItem;
