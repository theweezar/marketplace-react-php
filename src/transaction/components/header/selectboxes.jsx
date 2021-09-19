// DEPENDENCES
import React from "react";
// COMPONENTS
import SelectBox from "./selectbox/selectbox";
/**
 * Use in layout/transaction/components/header
 * Include 1 component
 *    - SelectBox
 * @param {*} props
 * @returns
 */
function SelectBoxes(props) {
  // =STATES=================================================
  const SELECT_BOXES = props.sboxes;
  
  // =FUNC=================================================
  return SELECT_BOXES.map((sbox) => (
    // * ---1-SELECT_BOX -------------------------------
    <SelectBox thisClassName={props.thisClassName} sbox={sbox} key={sbox.keyid}/>
  ));
}

export default SelectBoxes;
