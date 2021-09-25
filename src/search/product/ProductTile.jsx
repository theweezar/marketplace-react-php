import { Link } from 'react-router-dom';
import { Image } from '../../components/IconImage';

export function ProductTile({...props}) {
    const dict = props.dict;
    return (
        <div className="product-tile" id={dict.id}>
            <Link to={"/" + dict.id}>
                <div className="card">
                    <div className="card-body">
                        <div className="product-id d-inline-block">
                            #{dict.id}
                        </div>
                        <div className="product-name">
                            Axies #{dict.productName}
                        </div>
                        <div className="breed-count">
                            Breed count: {dict.breedCount}
                        </div>
                        <div className="item-container">
                            <Image src={dict.imageSrc} />
                        </div>
                        <div className="price-container">
                            {dict.price}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export function ProductTileExpand({...props}) {
    const dict = props.dict;
    return (
        <div className="product-tile expand">
            
        </div>
    );
}