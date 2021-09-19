import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiDownArrow } from 'react-icons/bi';
import { Button, Button3E } from '../components/Button';
import { IconImage24 } from '../components/IconImage';
import { ListViewColumnAbsolute, Item } from '../components/List';
import { BiLogIn } from 'react-icons/bi';
import { AiTwotoneShop, AiFillCaretDown } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { CgMenuGridR } from 'react-icons/cg';
import logo from '../static/images/logo.png';
import tabAxie from '../static/images/tab-axie.png';
import tabLand from '../static/images/tab-land.png';
import tabItem from '../static/images/tab-item.png';
import tabBundle from '../static/images/tab-bundle.png';
import { useState } from 'react';

export function MarketplaceHeader() {
    const options = [
        { id: Math.random().toString(36).substr(2, 9), value: 'Axies', startIcon: <IconImage24 src={tabAxie}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Lands', startIcon: <IconImage24 src={tabLand}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Items', startIcon: <IconImage24 src={tabItem}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Bundles', startIcon: <IconImage24 src={tabBundle}/> },
    ];

    const [selected, setSelected] = useState(0);

    return (
        <div className="header-wrapper">
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
                <Link to="/" className="d-none d-md-flex align-items-center btn-tab btn-dashboard">
                    <span className="d-flex align-items-center"><RiDashboardFill/></span>
                    <span className="route-name ms-1">Dashboard</span>
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
                    <GiHamburgerMenu />
                </div>
            </div>
            <div className="navigator-cat d-flex justify-between">
                <div className="category-link-wrapper-mo d-block d-md-none">
                    <Button3E className="btn-dropdown">
                        {options[selected].startIcon}
                        <span>{options[selected].value}</span>
                        <BiDownArrow/>
                    </Button3E>
                    <ListViewColumnAbsolute className="list-category d-none">
                        {options.map((option, index) => {
                            return (
                                <Item key={option.id}>
                                    <Button3E className="item-category" onClick={() => setSelected(index)}>
                                        {option.startIcon}
                                        <span>{option.value}</span>
                                        <></>
                                    </Button3E>
                                </Item>     
                            );
                        })}
                    </ListViewColumnAbsolute>
                </div>
                <Button className="btn-filter d-block d-md-none">
                    Filter
                </Button>
                <div className="d-none d-md-flex category-link-wrapper-pc">
                    {options.map((option, index) => {
                        return (
                            <Link to="/" key={index} className="d-flex align-items-center"
                            onClick={(e) => {e.preventDefault();setSelected(index)}}>
                                <Button3E className={"btn-cat " + (selected === index ? "active" : "")}>
                                    {option.startIcon}
                                    <span>{option.value}</span>
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

