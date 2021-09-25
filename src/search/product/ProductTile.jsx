import { Link } from 'react-router-dom';
import { Image } from '../../components/IconImage';
import pickaxe from '../../static/images/pickaxe.jpg';

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
                        <div className="image-container">
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
            <Link to={"/" + dict.id}>
                <div className="card">
                    <div className="card-body row">
                        <div className="col-5 col-xl-2 image-container">
                            <Image src={dict.imageSrc} />
                        </div>
                        <div className="col-7 col-xl-2 product-info d-xl-flex flex-column justify-content-center">
                            <div>
                                <div className="product-id d-inline-block">
                                    #{dict.id}
                                </div>
                            </div>
                            <div className="product-name">
                                Axies #{dict.productName}
                            </div>
                            <div className="breed-count">
                                Breed count: {dict.breedCount}
                            </div>
                            <div className="price-container d-xl-none">
                                {dict.price}
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 d-xl-flex align-items-center">
                            <div className="row attribute-info">
                                {Array(6).fill(null).map((el, index) => {
                                    return (
                                    <div className="col-6 col-xl-4 d-flex align-items-center attribute-wrapper" key={index}>
                                        <div className="image-attr-container">
                                            <Image src={pickaxe} width="32px"/>
                                        </div>
                                        <div className="ms-2 attr-item-info">
                                            Pickaxe
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="d-none d-xl-block col-xl-2 price-pc d-xl-flex align-items-center text-left">
                            <div className="price-container">
                                {dict.price}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}