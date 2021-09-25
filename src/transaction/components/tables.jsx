// Dependencies
import React, { useEffect, useState } from "react";
// Components
import MobileTable from "./tables/mobile-table";
import DesktopTable from "./tables/desktop-table";
/**
 *
 * @param {*} props
 * @returns
 */
function Tables(props) {
  // =STATES=================================================
  let n = 17;
  // =FUNC=================================================
  const [animation, setAnimation] = useState("");

  useEffect(() => {
      setAnimation("slide-from-right");
  }, []);
  return (
    <div className={props.thisClassName}>
      {/* --1 TABLE CONTENTS IN MOBILE ----------------  */}
      <MobileTable
        thisClassName="transaction__table d-lg-none"
        animationClass={animation}
      />
      {/* --1.2 TABLE CONTENTS IN DESKTOP ----------------  */}
      <DesktopTable
        thisClassName="transaction__table d-none d-lg-block"
        animationClass={animation}
      />
    </div>
  );
}

export default Tables;
