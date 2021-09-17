import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiDownArrow } from 'react-icons/bi';
import { Button, Button3E } from '../components/Button';
import { IconImage24 } from '../components/IconImage';
import { ListViewColumnAbsolute, Item } from '../components/List';
import logo from '../static/images/logo.png';
import tabAxie from '../static/images/tab-axie.png';
import { useState } from 'react';

export function MarketplaceHeader() {
    const options = [
        { id: Math.random().toString(36).substr(2, 9), value: 'Axies', startIcon: <IconImage24 src={tabAxie}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Cat 2', startIcon: <IconImage24 src={tabAxie}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Cat 3', startIcon: <IconImage24 src={tabAxie}/> },
        { id: Math.random().toString(36).substr(2, 9), value: 'Cat 4', startIcon: <IconImage24 src={tabAxie}/> },
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
                <div className="hambuger-menu ml-auto d-flex align-items-center">
                    <GiHamburgerMenu />
                </div>
            </div>
            <div className="navigator-cat d-flex justify-between">
                <div className="category-wrapper">
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
                <Button className="btn-filter">
                    Filter
                </Button>
            </div>
        </div>
    );
}

