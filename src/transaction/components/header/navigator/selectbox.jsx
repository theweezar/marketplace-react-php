// DEPENDENCES
import React from "react";
// COMPONENTS

/**
 * Use in layout/transaction/components/header/selectbox
 * @param {*} props
 * @returns
 */
function SelectBox(props) {
  // =STATES=================================================
  const SBOX = props.sbox;
  // =FUNC=================================================
  return (
    <div
    className={props.thisClassName}
    id={SBOX.name.toLowerCase() + "-box"}
  >
    {SBOX.options.map((item) => {
      if (item.type.toLowerCase().match("line")) {
        return <div className="line" key={item.keyid}></div>;
      } else {
        return (
          <div className="item" key={item.keyid}>
            <a href="#">{item.name}</a>
          </div>
        );
      }
    })}
  </div>
  )
}

export default SelectBox;
