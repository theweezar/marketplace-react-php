// DEPENDENCES
import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
// COMPONENTS

/**
 * Use in layout/transaction/components/header/navigator
 * @param {*} props
 * @returns
 */
function NavigationItem(props) {
    // =STATES=================================================
    const navigationItem = props.navigationItem;
    
    // =FUNC=================================================
    return (
        <div
        key={navigationItem.name}
        className={navigationItem.active ? "item active" : "item"}
        onClick={
            navigationItem.onClickButton
        }
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
    );
}

export default NavigationItem;
