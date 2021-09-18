import { ListViewColumnAbsolute, Item } from '../components/List';
import { Button, Button3E } from '../components/Button';
import { Image } from '../components/IconImage';
import { FaAngleDown } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg'
import { FaList } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import axieFullTransparent1 from '../static/images/axie-full-transparent_1.png';
// import axieFullTransparent2 from '../static/images/axie-full-transparent_2.png';
// import axieFullTransparent3 from '../static/images/axie-full-transparent_3.png';


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

    const productTiles = Array(20).fill(
        { id: Math.random().toString(36).substr(2, 9), breedCount: Math.floor(Math.random()*(152422 + 1 - 100000) + 100000)}
    );
    
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedSale, setSelectedSale] = useState(0);
    const [display, setDisplay] = useState(1);

    const itemCount = Math.floor(Math.random()*(152422 + 1 - 100000) + 100000);

    return (
        <div className="search-result-wrapper col-12 col-lg-9">
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
                        <span>{itemCount} Items</span>
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
                {/* Product tiles list START here */}
                <div className="row product-tile-list">
                    {productTiles.map(((producTile, index) => {
                        return (
                            <div className="col-6 col-lg-3 product-tile" key={index}>
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
                {/* Product tiles list END here */}
                <div className="pagination d-flex align-items-center justify-evenly">
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
                        <span>of {itemCount}</span>
                    </div>
                    <div>
                        <Button className="d-flex align-items-center btn-paging">
                            <ImArrowRight2/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
