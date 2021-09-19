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
    className={(SBOX.isOpen ? " " : "d-none ") + props.thisClassName}
    id={SBOX.name.toLowerCase() + "-box"}
  >
    {SBOX.options.map((item) => {
      if (item.type.toLowerCase().match("line")) {
        return <div className="line" key={item.keyid}></div>;
      } else {
        return (
          <div className="item" key={item.keyid}>
            {item.name}
          </div>
        );
      }
    })}
  </div>
  )
}

export default SelectBox;
