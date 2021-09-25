// Dependencies
import React from "react";
// import "../scss/transaction-layout.scss";
// Components
import Sidebar from "../transaction/components/sidebar";
import Header from "../transaction/components/header";
import Footer from "../transaction/components/footer";
import Transaction from "../transaction/transaction";
import { Route } from "react-router-dom";
/**
 * Transaction include const Header and Footer
 * can apply any Container to render
 * @param {*} props
 * @returns
 */
const TransactionLayout = (props) => {
  document.title = "Transaction";
  return (
    <>
      {/* OverlaySidebar = Sidebar + BlurBackground */}
      <Sidebar />
        <div className="custom-container">
          {/* For Routing and futher development */}

          <Header />
          {/* <Route path="/home">Home page</Route> */}
          <Transaction />
          {/* <Route path="/blocks">Blocks page</Route> */}

          {/* For Routing and futher development */}
        </div>
      <Footer />
    </>
  );
};

export default TransactionLayout;
