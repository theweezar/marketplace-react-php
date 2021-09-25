import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CgMenuGridR } from 'react-icons/cg'
import { FaList } from 'react-icons/fa';

import { Button } from '../components/Button';
import { DropDownMenu3E } from '../components/Input';
import { ProductList } from './product/ProductList';
import { Pagination } from './Pagination';

import { setActionTypeDefault } from '../scripts/redux/actions/mainAction';

function SortPrice() {
    const optionsSortPrice = [
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest Price'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest ID'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Highest ID'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Highest Price'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Latest'}
    ];

    const index = 0;

    return (
        <DropDownMenu3E className="sort-price" index={index} options={optionsSortPrice} name="sort-price-option"/>
    );
}

function DisplayTile() {
    const [display, setDisplay] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActionTypeDefault({display: display}));
        return;
    }, [display, dispatch]);
    
    return (
        <div className="display-tile d-flex">
            <Button className={"d-flex align-items-center " + (display === 1 ? 'active' : '')} onClick={() => setDisplay(1)}>
                <CgMenuGridR/>
            </Button>
            <Button className={"d-flex align-items-center " + (display === 2 ? 'active' : '')} onClick={() => setDisplay(2)}>
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
