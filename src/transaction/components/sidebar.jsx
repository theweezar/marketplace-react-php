// Dependencies
import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import sidebarAction from "../../redux/actions/sidebarAction";
// Components
import NavigationItem from "./header/navigator/item";
/**
 * Use in layout/transaction
 * Header/sidebar includes 2 small Components:
 *     - BlurBackground
 *     - Sidebar
 * @param {*} props
 * @returns
 */
const Sidebar = (props) => {
  // =STATES=================================================
  const NAVIGATION_ITEMS = [
    {
      keyid: "navigation_item_home",
      active: false,
      name: "Home",
      route: "/home",
      options: [],
    },
    {
      keyid: "navigation_item_transactions",
      active: true,
      name: "Transactions",
      route: "/",
      options: [],
    },
    {
      keyid: "navigation_item_blocks",
      active: false,
      name: "Blocks",
      route: "#",
      options: [],
    },
    {
      keyid: "navigation_items_accounts",
      active: false,
      name: "Accounts",
      route: "#",
      options: [
        {
          keyid: "accounts-options-01",
          type: "text",
          name: "All accounts",
        },
        {
          keyid: "accounts-options-02",
          type: "text",
          name: "Vertified Contracts",
        },
      ],
    },
    {
      keyid: "navigation_items_tokens",
      active: false,
      name: "Tokens",
      route: "#",
      options: [
        {
          keyid: "tokens-options-01",
          type: "text",
          name: "ERC20 Tokens",
        },
        {
          keyid: "tokens-options-02",
          type: "text",
          name: "ERC20 Transfers",
        },
        {
          keyid: "tokens-options-03",
          type: "line",
        },
        {
          keyid: "tokens-options-04",
          type: "text",
          name: "ERC721 Tokens",
        },
        {
          keyid: "tokens-options-05",
          type: "text",
          name: "ERC721 Transfers",
        },
      ],
    },
    {
      keyid: "navigation_items_explorers",
      active: false,
      name: "Explorers",
      route: "#",
      options: [
        {
          keyid: "explorers-options-01",
          type: "text",
          name: "Ronin Mainnet",
        },
        {
          keyid: "explorers-options-02",
          type: "text",
          name: "Ronin Testnet",
        },
      ],
    },
  ];
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen);
  const dispatch = useDispatch();
  const node = useRef();
  // =FUNC=================================================
  useOnClickOutside(node, () => {
    if (isSidebarOpen) dispatch(sidebarAction.hide());
  });
  const onClickHandler = () => {
    dispatch(sidebarAction.hide());
  }
  return (
    <div className={"sidebar d-lg-none " + (!isSidebarOpen ? "d-none" : "")}>
      <div className="sidebar__blur_background">
        <div className="overlay_sidebar_blur_background">
          <div className="sidebar__container" ref={node}>
            <div className="btn-box">
              <button className="btn" onClick={onClickHandler}>
                <IoClose />
              </button>
            </div>
            <div className="list-box">
              <div className="list">
                {NAVIGATION_ITEMS.map((item) => (
                  <NavigationItem
                    navigationItem={item}
                    key={item.keyid}
                    type="sidebar"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
