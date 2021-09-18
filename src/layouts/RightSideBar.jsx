import { ListViewColumn, Item } from "../components/List";
import { Link } from "react-router-dom";
import { Button3E } from "../components/Button";
import { AiOutlineDashboard, AiTwotoneShop } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { FaProductHunt } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';

export function RightSideBar() {
    return (
        <div className="right-side-bar d-none">
            <ListViewColumn>
                <Item>
                    <Link to="/" className="d-flex align-items-center">
                        <span className="d-flex align-items-center"><AiOutlineDashboard/></span>
                        <span className="route-name">Dashboard</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="/" className="d-flex align-items-center">
                        <span className="d-flex align-items-center"><AiTwotoneShop/></span>
                        <span className="route-name">Marketplace</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="/" className="d-flex align-items-center">
                        <span className="d-flex align-items-center"><FiHelpCircle/></span>
                        <span className="route-name">Help</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="/" className="d-flex align-items-center">
                        <span className="d-flex align-items-center"><FaProductHunt/></span>
                        <span className="route-name">Product</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="/asd">
                        <Button3E className="btn-login">
                            <BiLogIn />
                            <span>Login</span>
                        </Button3E>
                    </Link>
                </Item>
            </ListViewColumn>
        </div>
    );
}