import React from 'react';
import '../scss/transaction.scss';
import Header from '../transaction/components/header'
import Footer from '../transaction/components/footer'
 
/**
 * Transaction include const Header and Footer
 * can apply any Container to render
 * @param {*} props 
 * @returns 
 */
const TransactionLayout = (props) => {
    document.title = 'Transaction'
    return (
        <div className="custom-container">
        <Header>Header</Header>
        {/* For Routing and futher development */}
        {props.layout}
        <Footer>Footer</Footer>
        </div>
    );
}

export default TransactionLayout;
