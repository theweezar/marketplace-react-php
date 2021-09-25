// DEPENDENCES
import React from 'react';
import { GrSearch } from "react-icons/gr";
// COMPONENTS

/**
 * Use in layout/transaction/components/header
 * Include 1 component
 *      -   InputBox
 * @param {*} props 
 * @returns 
 */
function Searcher(props) {
    // =STATES=================================================
    const INPUT_PLACEHOLDER_TEXT = props.placeholderText;

    // =FUNC=================================================
    return (
        <div className={props.thisClassName}>
            {/* --1-INPUT_BOX -------------- */}
            <div className="inputbox ">
            <input
              type="text"
              className="form-control"
              placeholder={INPUT_PLACEHOLDER_TEXT}
            />
            <GrSearch />
          </div>
        </div>
    );
}

export default Searcher;