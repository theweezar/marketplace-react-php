import { ListViewColumnAbsolute, Item } from '../components/List';
import { Button, Button3E } from '../components/Button';
import { Image } from '../components/IconImage';
import { FaAngleDown } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg'
import { FaList } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/search.scss';
import axieFullTransparent1 from '../static/images/axie-full-transparent_1.png';
import axieFullTransparent2 from '../static/images/axie-full-transparent_2.png';
import axieFullTransparent3 from '../static/images/axie-full-transparent_3.png';


export function SearchResult() {
    const optionsSortPrice = [
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest Price'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest ID'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Highest ID'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Lowest Price'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Highest Price'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Latest'}
    ];

    const optionsSortSale = [
        { id: Math.random().toString(36).substr(2, 9), value: 'All'},
        { id: Math.random().toString(36).substr(2, 9), value: 'For sale'},
        { id: Math.random().toString(36).substr(2, 9), value: 'Not for sale'}
    ];

    const productTiles = Array(100).fill(
        { id: Math.random().toString(36).substr(2, 9), breedCount: Math.floor(Math.random()*(152422 + 1 - 100000) + 100000)}
    );
    
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedSale, setSelectedSale] = useState(0);
    const [display, setDisplay] = useState(1);

    return (
        <div className="search-result-wrapper">
            <div className="sort-section">
                <div className="d-flex justify-between">
                    <div className="sort-price">
                        <Button3E className="btn-sort-price w-100">
                            <></>
                            <span>{optionsSortPrice[selectedPrice].value}</span>
                            <FaAngleDown />
                        </Button3E>
                        <ListViewColumnAbsolute className="list-sort-price d-none">
                            {optionsSortPrice.map((option, index) => {
                                return (
                                    <Item key={option.id}>
                                        <Button3E className="item-sort-price w-100" onClick={() => setSelectedPrice(index)}>
                                            <></>
                                            <span>{option.value}</span>
                                            <></>
                                        </Button3E>
                                    </Item>     
                                );
                            })}
                        </ListViewColumnAbsolute>
                    </div>
                    <div className="display-tile d-flex">
                        <Button className={"d-flex align-items-center " + (display === 1 ? 'active' : '')} onClick={() => setDisplay(1)}>
                            <CgMenuGridR/>
                        </Button>
                        <Button className={"d-flex align-items-center " + (display === 0 ? 'active' : '')} onClick={() => setDisplay(0)}>
                            <FaList/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="search-result-content">
                <div className="d-flex justify-between">
                    <div className="product-amount">
                        <span>{Math.floor(Math.random()*(152422 + 1 - 100000) + 100000)} Items</span>
                    </div>
                    <div className="sort-sale">
                        <Button3E className="btn-sale w-100">
                            <></>
                            <span>{optionsSortSale[selectedSale].value}</span>
                            <FaAngleDown />
                        </Button3E>
                        <ListViewColumnAbsolute className="list-sort-sale d-none">
                            {optionsSortSale.map((option, index) => {
                                return (
                                    <Item key={option.id}>
                                        <Button3E className="item-sort-sale w-100" onClick={() => setSelectedSale(index)}>
                                            <></>
                                            <span>{option.value}</span>
                                            <></>
                                        </Button3E>
                                    </Item>     
                                );
                            })}
                        </ListViewColumnAbsolute>
                    </div>
                </div>
                {/* Product tiles list below here */}
                <div className="row product-tile-list">
                    {productTiles.map((producTile => {
                        return (
                            <div className="col-6 product-tile" key={producTile.id}>
                                <Link to={"/" + producTile.id}>
                                    <div class="card">
                                        <div class="card-body">
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
        </div>
    );
}