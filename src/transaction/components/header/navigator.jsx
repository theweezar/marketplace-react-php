// DEPENDENCES
import React from 'react';
import { HiMenu } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import sidebarAction from '../../../redux/actions/sidebarAction';
// COMPONENTS
import NavigationItem from './navigator/item';

/**
 * Use in layout/transaction/components/header
 * Include 3 component
 *        - MobileMenuBtn
 *        - NavigatorList
 *        - SelectNavigatorItemBox
 * @param {*} props 
 * @returns 
 */
function Navigator(props) {
    // =STATES=================================================
    const NAVIGATION_ITEMS = props.navigationItems;
    const dispatch = useDispatch();
    // =FUNC=================================================
    const onClickHandler = () => {
      dispatch( sidebarAction.show() );
    };
    return (
        <div className={props.thisClassName}>
         {/* --1-MobileMenuBtn ------------ */}
         <button className=" btn p-0 m-0 d-lg-none" onClick={onClickHandler}>
            <HiMenu />
          </button>

          {/* --2-NavigatorList ------------ */}
          <div className="list-box d-none d-lg-flex">
            <div className="list">
              {NAVIGATION_ITEMS.map((item) => (
                <NavigationItem navigationItem={item} key={item.keyid} />
              ))}
            </div>
          </div>

          {/* --3-SelectNavigatorItemBox ------------ */}
            {props.children}
        </div>
    );
}

export default Navigator;