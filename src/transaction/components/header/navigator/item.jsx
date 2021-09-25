// DEPENDENCES
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
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
  const type = props.type ?? "";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const node = useRef();
  // =FUNC=================================================
  useOnClickOutside(node, () => {
    if (type === "") setIsModalOpen(false);
  });
  const onClickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="list-item-container" ref={node}>
      <Link
        to={navigationItem.route}
        className={navigationItem.active ? "list-item active" : "list-item"}
        key={navigationItem.name}
        onClick={onClickHandler}
      >
        <span>
        {navigationItem.name}</span>
        {navigationItem.options.length === 0 ? (
          ""
        ) : (
            <BsFillCaretDownFill/>
        )}
      </Link>
      {navigationItem.options.length > 0 && isModalOpen ? (
        type === "" ? (
          <SelectBox
            thisClassName="select_box navigation__list_select_box border"
            sbox={navigationItem}
          />
        ) : (
          <SelectBox thisClassName="side_box" sbox={navigationItem} />
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default NavigationItem;
