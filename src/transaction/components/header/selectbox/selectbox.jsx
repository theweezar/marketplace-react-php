// DEPENDENCES
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import openModal from "../../../../redux/actions/openModalAction";
// COMPONENTS

/**
 * Use in layout/transaction/components/header/selectbox
 * @param {*} props
 * @returns
 */
function SelectBox(props) {
  // =STATES=================================================
  const SBOX = props.sbox;
  const isModalOpened = useSelector(state => state.isModalOpened);
  const dispatch = useDispatch();
  const node = useRef();
  const handleOutsideClick = (e) => { 
    // Outside Click
    if (node.current && node.current.contains(e.target) ) {
      console.log("Inside" +e.target)
    }else if(isModalOpened !== ""){
      console.log("Outside: "+e.target)
      // dispatch( openModal("") )
    }
    
  };
  
  function callback() {
    if( isModalOpened !== "" && isModalOpened !== "@@INIT")
    document.addEventListener("mousedown", handleOutsideClick);
    else
    document.removeEventListener("mousedown", handleOutsideClick );
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick );
    };
  }

  useEffect(callback,[isModalOpened]);
  // =FUNC=================================================
  return (
    <div
    ref={node}
    className={( isModalOpened.toLowerCase() === SBOX.name.toLowerCase() ? " " : "d-none ") + props.thisClassName}
    id={SBOX.name.toLowerCase() + "-box"}
  >
    {SBOX.options.map((item) => {
      if (item.type.toLowerCase().match("line")) {
        return <div className="line" key={item.keyid}></div>;
      } else {
        return (
          <div className="item"  key={item.keyid}>
            {item.name}
          </div>
        );
      }
    })}
  </div>
  )
}

export default SelectBox;
