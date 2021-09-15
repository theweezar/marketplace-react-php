import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiDownArrow } from 'react-icons/bi';
import { Button, ButtonDropDown } from '../components/button';
import logo from '../static/images/logo.png';
import tabAxie from '../static/images/tab-axie.png';

function Header() {
    var options = [
        { name: 'Axies', startIcon: tabAxie, endIcon: <BiDownArrow/> },
        { name: 'Cat 2', startIcon: tabAxie, endIcon: <BiDownArrow/> },
        { name: 'Cat 3', startIcon: tabAxie, endIcon: <BiDownArrow/> },
        { name: 'Cat 4', startIcon: tabAxie, endIcon: <BiDownArrow/> },
    ];
    return (
        <>
            <div className="header d-flex w-100">
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
            <div className="navigator d-flex justify-between">
                <ButtonDropDown options={options} selectedIndex="0" className="category-dropdown"/>
                <Button name="Filter" className="filter-button" />
            </div>
        </>
    );
}

export default Header;
