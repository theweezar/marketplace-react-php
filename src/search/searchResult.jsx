import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg'
import { FaList } from 'react-icons/fa';

import { Button } from '../components/Button';
import { DropDownMenu3E } from '../components/Input';
import { ProductList } from './product/ProductList';
import { Pagination } from './Pagination';

function SortPrice() {
    const optionsSortPrice = [
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest Price', start: <></>},
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest ID', start: <></>},
        { id: Math.random().toString(36).substr(2, 9), value: 'Highest ID', start: <></>},
        { id: Math.random().toString(36).substr(2, 9), value: 'Highest Price', start: <></>},
        { id: Math.random().toString(36).substr(2, 9), value: 'Latest', start: <></>}
    ];

    const index = 0;

    return (
        <DropDownMenu3E className="sort-price" index={index} options={optionsSortPrice} name="sort-price-option"/>
    );
}

function DisplayTile() {
    const [display, setDisplay] = useState(1);
    return (
        <div className="display-tile d-flex">
            <Button className={"d-flex align-items-center " + (display === 1 ? 'active' : '')} onClick={() => setDisplay(1)}>
                <CgMenuGridR/>
            </Button>
            <Button className={"d-flex align-items-center " + (display === 0 ? 'active' : '')} onClick={() => setDisplay(0)}>
                <FaList/>
            </Button>
        </div>
    );
}

function SortSale() {
    const optionsSortSale = [
        { id: Math.random().toString(36).substr(2, 9), value: 'All'},
        { id: Math.random().toString(36).substr(2, 9), value: 'For sale'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Not for sale'}
    ];

    const index = 0;

    return (
        <DropDownMenu3E className="sort-sale" index={index} options={optionsSortSale} name="sort-sale-option"/>
    )
}

function ItemCount() {
    const itemCount = Math.floor(Math.random()*(152422 + 1 - 100000) + 100000);
    return (
        <div className="product-amount d-flex align-items-center">
            <span>{itemCount} Items</span>
        </div>
    );
}

export function SearchResult() {
    return (
        <div className="search-result-wrapper">
            <div className="sort-section-mo">
                <div className="d-flex d-lg-none justify-between">
                    <SortPrice/>
                    <DisplayTile/>
                </div>
            </div>
            <div className="search-result-content">
                <div className="d-flex d-lg-none justify-between">
                    <ItemCount/>
                    <SortSale/>
                </div>
                {/* Sort Section for Desktop start*/}
                <div className="sort-section-pc d-none d-lg-flex justify-between">
                    <div className="d-inline-flex">
                        <ItemCount/>
                        <SortSale/>
                    </div>
                    <div className="d-inline-flex">
                        <SortPrice/>
                        <DisplayTile/>
                    </div>
                </div>
                {/* Sort Section for Desktop end */}
                <ProductList />
                <Pagination />
            </div>
        </div>
    );
}
