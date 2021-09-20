// Dependencies
import React from 'react';
// Components
import MobileTable from './tables/mobile-table';
import DesktopTable from './tables/desktop-table';
/**
 * 
 * @param {*} props 
 * @returns 
 */
function Tables(props) {
    // =STATES=================================================
    // =FUNC=================================================
    return (
        <div className={props.thisClassName}>
             {/* --1 TABLE CONTENTS IN MOBILE ----------------  */}
          <MobileTable thisClassName="transaction__table d-lg-none"/>
          {/* --1.2 TABLE CONTENTS IN DESKTOP ----------------  */}
          <DesktopTable thisClassName="transaction__table d-none d-lg-block"/>
        </div>
    );
}

export default Tables;