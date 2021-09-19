// DEPENDENCES
import React from "react";
// COMPONENTS

/**
 * Use in layout/transaction/components/footer
 * @param {*} props
 * @returns
 */

function Visit(props) {
    const VISIT_LIST = props.visitList;
  return (
    <div className={props.thisClassName}>
      {/* --1. LIST ---------------- */}
      <div className="list ">
        {VISIT_LIST.map((sublist) => {
          return (
            // {/* --1.1 SUBLIST ---------------- */}
            <div className="sublist" key={sublist.keyid}>
              {sublist.items.map((item) => (
                <div className={"item " + (item.headinMobile ? "head" : " ")} key={item.keyid}>
                  <a href={item.route}>{item.text}</a>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Visit;
