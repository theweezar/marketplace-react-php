// Dependencies
import React from "react";
// Components
import Branding from "./header/branding";
import Navigator from "./header/navigator";
import Searcher from "./header/searcher";

/**
 * Use in layout/transaction
 * Header/nav includes 3 small Components:
 *     - Branding
 *     - Navigator
 *     - Searcher
 * @param {*} props
 * @returns
 */
const Header = (props) => {
  // =STATES=================================================
  // 01.Branding Area
  const BRAND_NAME = "Ronin";
  const BRAND_BADGES = ["Mainnet", "Testnet"];
  // 02.Navigation Area
    /* -------STATES ----------------------- */

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
    ];
    

  // 03.Searching Area
  const INPUT_PLACEHOLDER_TEXT = "Address, Txn Hash, Block, etc.";
  
  // =FUNC=================================================

  return (
    <header>
      {/* ---1-NAV ------------------------------------------------- */}
      <nav className="row py-2 py-lg-0 align-items-center ">
        {/* --1.1-BRANDING -------------------------------- */}
        <Branding
          thisClassName="branding__area d-flex col-6 col-lg-2 "
          brandName={BRAND_NAME}
          brandBadges={BRAND_BADGES}
        />

        {/* --1.2-NAVIGATION_AREA -------------------------------- */}
        <Navigator
          thisClassName="navigation__area col-6 col-lg-7 text-end text-lg-left"
          navigationItems={NAVIGATION_ITEMS}
        />

        {/* --1.3-SEARCHER -------------------------------- */}
        <Searcher
          thisClassName="searching__area col-12 col-lg-3"
          placeholderText={INPUT_PLACEHOLDER_TEXT}
        />
      </nav>
    </header>
  );
};

export default Header;
