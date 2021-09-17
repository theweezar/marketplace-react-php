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
    var options = [
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
                {/* <Select className="menu-cat" selected={selected}>
                    <Button value={options[selected].value} startIcon={options[selected].startIcon} endIcon={<BiDownArrow/>} className="btn-dropdown"/>
                    {options.map((option, index) => {
                        return (
                            <Option setKey={index} key={index}>
                                <Button value={option.value} startIcon={option.startIcon} className="item-cat pointer" onClick={() => setSelected(index)}/>
                            </Option>
                        );
                    })}
                </Select>
                <Button value="Filter" className="btn-filter" /> */}
                <div>
                    <Button3E className="btn-dropdown">
                        <IconImage24 src={tabAxie}/>
                        <span>Axies</span>
                        <BiDownArrow/>
                    </Button3E>
                    <ListViewColumnAbsolute className="list-category">
                        <Item>
                            <Button>
                                Hello
                            </Button>
                        </Item>
                    </ListViewColumnAbsolute>
                </div>
                <Button className="btn-filter">
                    Filter
                </Button>
            </div>
        </div>
    );
}

