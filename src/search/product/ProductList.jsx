import { ProductTile } from './ProductTile';
import axieFullTransparent1 from '../../static/images/axie-full-transparent_1.png';
import axieFullTransparent2 from '../../static/images/axie-full-transparent_2.png';
import axieFullTransparent3 from '../../static/images/axie-full-transparent_3.png';


export function ProductList() {
    const imageSrcList = [axieFullTransparent1, axieFullTransparent2, axieFullTransparent3];
    const productTiles = Array(20).fill({}).map(() => {
        return {
            id: Math.random().toString(36).substr(2, 9), 
            breedCount: Math.floor(Math.random()*(152422 + 1 - 100000) + 100000),
            productName: Math.random().toString(36).substr(2, 9),
            imageSrc: imageSrcList.sort(() => Math.random() - 0.5)[0],
            price: '$4.78'
        };
    });
    return (
        <div className="row product-tile-container justify-content-center">
            <div className="product-tile-list row justify-content-center">
                {productTiles.map(((producTile, index) => {
                    return (
                        <ProductTile dict={producTile} key={producTile.id}/>
                    );
                }))}
            </div>
        </div>
    );
}