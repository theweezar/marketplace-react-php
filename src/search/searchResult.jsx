import { Button } from '../components/Button';
import { Image } from '../components/IconImage';
import { DropDownMenu3E } from '../components/Input';
import { CgMenuGridR } from 'react-icons/cg'
import { FaList } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import axieFullTransparent1 from '../static/images/axie-full-transparent_1.png';

function SortPrice() {
    const optionsSortPrice = [
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest Price', start: <></>},
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest ID', start: <></>},
        { id: Math.random().toString(36).substr(2, 9), value: 'Highest ID', start: <></>},
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest Price', start: <></>},
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

    const productTiles = Array(20).fill(
        { id: Math.random().toString(36).substr(2, 9), breedCount: Math.floor(Math.random()*(152422 + 1 - 100000) + 100000)}
    );

    return (
        <div className="search-result-wrapper col-12">
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
                {/* Product tiles list START here */}
                <div className="row product-tile-container justify-content-center">
                    <div className="product-tile-list row justify-content-center">
                        {productTiles.map(((producTile, index) => {
                            return (
                                <div className="col-6 product-tile" key={index}>
                                    <Link to={"/" + producTile.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="product-id d-inline-block">
                                                    #{producTile.id}
                                                </div>
                                                <div className="product-name">
                                                    Axies #{producTile.id}
                                                </div>
                                                <div className="breed-count">
                                                    Breed count: {producTile.breedCount}
                                                </div>
                                                <div className="item-container">
                                                    <Image src={axieFullTransparent1} />
                                                </div>
                                                <div className="price-container">
                                                    $4.78
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        }))}
                    </div>
                </div>
                {/* Product tiles list END here */}
                <div className="pagination d-flex justify-content-center">
                    <div className="pagination-wrapper d-flex align-items-center justify-evenly">
                        <div>
                            <Button className="d-flex align-items-center btn-paging">
                                <ImArrowLeft2/>
                            </Button>
                        </div>
                        <div className="d-flex align-items-center pagination-track">
                            <span>Page</span>
                            <form className="mx-1" action="/">
                                <input type="text" name="page-number" id="page-number"/>
                            </form>
                            <span>of {1923}</span>
                        </div>
                        <div>
                            <Button className="d-flex align-items-center btn-paging">
                                <ImArrowRight2/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
