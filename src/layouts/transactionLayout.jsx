import React from 'react';
import '../scss/transaction-layout.scss';
import Header from '../transaction/components/header';
import Footer from '../transaction/components/footer';
import Transaction from '../transaction/transaction';
import {
    BrowserRouter as Router, Route
  } from "react-router-dom";
/**
 * Transaction include const Header and Footer
 * can apply any Container to render
 * @param {*} props 
 * @returns 
 */
const TransactionLayout = (props) => {
    document.title = 'Transaction'
    return (
        <>
        <div className="custom-container">
        {/* For Routing and futher development */}
        <Router>
            <Header/>
                <Route path="/home">
                    Home page
                </Route>
                <Route exact path="/">
                    <Transaction/>
                </Route>
                <Route path="/blocks">
                    Blocks page
                </Route>
        </Router>
        {/* For Routing and futher development */}
        </div>
        <Footer/>
        </>
    );
}

export default TransactionLayout;
