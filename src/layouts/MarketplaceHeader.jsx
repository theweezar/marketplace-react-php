import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiLogIn } from 'react-icons/bi';
import { RiDashboardFill } from 'react-icons/ri';
import { CgMenuGridR } from 'react-icons/cg';
import { AiTwotoneShop, AiFillCaretDown } from 'react-icons/ai';

import { Button, Button3E } from '../components/Button';
import { IconImage24 } from '../components/IconImage';
import { RightSideBar } from "./RightSideBar";
import { useOnClickOutside, DropDownMenu3E } from '../components/Input';

import { setActionTypeDefault } from '../scripts/redux/actions/mainAction';
import properties from '../properties.json';

import logo from '../static/images/logo.png';
import tabAxie from '../static/images/tab-axie.png';
import tabLand from '../static/images/tab-land.png';
import tabItem from '../static/images/tab-item.png';
import tabBundle from '../static/images/tab-bundle.png';

function CategoryTabDropdown({...props}) {
    const categories = props.categories;
    const index = 0;
    return (
        <DropDownMenu3E className="category-link-wrapper-mo d-block d-md-none" index={index} 
        options={categories} name="category-link-wrapper-mo" />
    )
}

export function MarketplaceHeader({...props}) {
    const categories = [
        { id: Math.random().toString(36).substr(2, 9), value: 'Axies', start: <IconImage24 src={tabAxie}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Lands', start: <IconImage24 src={tabLand}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Items', start: <IconImage24 src={tabItem}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Bundles', start: <IconImage24 src={tabBundle}/> },
    ];

    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();
    const ref = useRef();
    const isSideBarOpen = useSelector(state => state.isSideBarOpen);
    const isFilterOpen = useSelector(state => state.isFilterOpen);
    
    const filterOpenHandle = () => {
        !isFilterOpen ? dispatch(setActionTypeDefault(properties.FILTER_OPEN)) : dispatch(setActionTypeDefault(properties.FILTER_CLOSE));
    };

    useOnClickOutside(ref, () => dispatch(setActionTypeDefault(properties.SIDEBAR_CLOSE)));

    return (
        <div className="header-wrapper">
            <div className="right-side-bar-container" ref={ref}>
                <RightSideBar className={(isSideBarOpen ? "expand":"")}/>
            </div>
            <div className="navigator-page d-flex w-100">
                <div className="logo-container">
                    <Link to="/">
                        <img
                            srcSet={logo}
                            width="66px"
                            height="36px"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="d-none d-md-flex align-items-center btn-product-menu">
                    <CgMenuGridR/>
                    <AiFillCaretDown/>
                </div>
                <Link to="/transactions" className="d-none d-md-flex align-items-center btn-tab btn-dashboard">
                    <span className="d-flex align-items-center"><RiDashboardFill/></span>
                    <span className="route-name ms-1">Transaction</span>
                </Link>
                <Link to="/" className="d-none d-md-flex align-items-center btn-tab btn-marketplace active">
                    <span className="d-flex align-items-center"><AiTwotoneShop/></span>
                    <span className="route-name ms-1">Marketplace</span>
                </Link>
                <Link to="/asd" className="d-none d-md-block ml-auto">
                    <Button3E className="btn-login">
                        <BiLogIn />
                        <span>Login</span>
                    </Button3E>
                </Link>
                <div className="hambuger-menu ml-auto d-flex align-items-center d-md-none">
                    <GiHamburgerMenu onClick={() => dispatch(setActionTypeDefault(properties.SIDEBAR_OPEN))}/>
                </div>
            </div>
            <div className="navigator-cat d-flex justify-between">
                <CategoryTabDropdown categories={categories}/>
                <Button className="btn-filter d-block d-md-none" onClick={filterOpenHandle}>
                    Filter
                </Button>
                <div className="d-none d-md-flex category-link-wrapper-pc">
                    {categories.map((category, index) => {
                        return (
                            <Link to="/" key={index} className="d-flex align-items-center"
                            onClick={(e) => {e.preventDefault();setSelected(index)}}>
                                <Button3E className={"btn-cat " + (selected === index ? "active" : "")}>
                                    {category.start}
                                    <span>{category.value}</span>
                                </Button3E>
                                <div className={"bottom-bar " + (selected === index ? "active" : "")}></div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

