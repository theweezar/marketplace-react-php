import { Link } from 'react-router-dom';
import { Image } from '../components/IconImage';
import axieFullTransparent1 from '../static/images/axie-full-transparent_1.png';

export function ProductList() {
    const productTiles = Array(20).fill(
        { id: Math.random().toString(36).substr(2, 9), breedCount: Math.floor(Math.random()*(152422 + 1 - 100000) + 100000)}
    );
    return (
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
    );
}