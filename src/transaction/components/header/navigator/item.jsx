// DEPENDENCES
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import {useOnClickOutside} from "../../../../hooks/useOnClickOutside"
// COMPONENTS
import SelectBox from "./selectbox";

/**
 * Use in layout/transaction/components/header/navigator
 * @param {*} props
 * @returns
 */
function NavigationItem(props) {
  // =STATES=================================================
  const navigationItem = props.navigationItem;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const node = useRef();
  // =FUNC=================================================
  useOnClickOutside(node, () =>setIsModalOpen(false));
  const onClickHandler = () => {
      setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="list-item-container" ref={node}>
      <div
        key={navigationItem.name}
        className={navigationItem.active ? "list-item active" : "list-item"}
        onClick={onClickHandler}
      >
        <Link to={navigationItem.route}>{navigationItem.name}</Link>
        {navigationItem.options.length === 0 ? (
          ""
        ) : (
          <button className="btn p-0">
            <BsFillCaretDownFill />
          </button>
        )}
      </div>
      {navigationItem.options.length > 0 && isModalOpen ? (
        <SelectBox thisClassName="select_box navigation__list_select_box border" sbox={navigationItem}/>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavigationItem;
