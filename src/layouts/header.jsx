import { Link } from "react-router-dom";
import logo from '../static/images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
    return (
        <div className="header d-flex w-100">
            <div className="logo-container">
                <Link to="/">
                    <img srcSet={logo} width="66px" height="36px" alt="Logo" />
                </Link>
            </div>
            <div className="hambuger-menu ml-auto d-flex align-items-center">
                <GiHamburgerMenu/>
            </div>
        </div>
    );
}

export default Header;
