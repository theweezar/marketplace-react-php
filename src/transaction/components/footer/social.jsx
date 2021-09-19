// DEPENDENCES
import React from "react";
// COMPONENTS

/**
 * Use in layout/transaction/components/footer
 * @param {*} props
 * @returns
 */

function Social(props) {
  // =STATES=================================================
    const SOCIAL_LIST = props.socialList;
  // =FUNC=================================================
  return (
    <div className={props.thisClassName}>
      <div className="list ">
        {SOCIAL_LIST.map((item) => {
          return (
            <div className="social" key={item.keyid}>
              <a href={item.route}>{item.svg}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Social;
