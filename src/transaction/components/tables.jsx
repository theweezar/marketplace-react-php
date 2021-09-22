// Dependencies
import React, { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import tableAction from "../../redux/actions/tableAction";
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
  const dispatch = useDispatch();
  const table = useSelector(state => state.table);
  // =FUNC=================================================

  useEffect(() => {
    dispatch(tableAction.generate(n));
  }, []);
  return (
    <div className={props.thisClassName}>
      {/* --1 TABLE CONTENTS IN MOBILE ----------------  */}
      {/* <MobileTable
        thisClassName="transaction__table d-lg-none"
      /> */}
      {/* --1.2 TABLE CONTENTS IN DESKTOP ----------------  */}
      {/* <DesktopTable
        thisClassName="transaction__table d-none d-lg-block"
      /> */}
    </div>
  );
}

export default Tables;
