import { useSelector } from "react-redux";
import { FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MarketplaceHeader } from "./MarketplaceHeader";

function BlurBackground({...props}) {
    const isSideBarOpen = useSelector(state => state.isSideBarOpen);
    
    return (
        <div className={"blur-bg z-1000 " + (isSideBarOpen ? "":"d-none")}></div>
    );
}

function Veil() {
    return (
        <div className="veil d-none"></div>
    );
}

function CustomerServiceButton() {
    return (
        <div className="btn-customer-service-wrapper z-1000">
            <Link to="/" className="btn-customer-service d-flex align-items-center justify-content-center">
                <FaHeadset/>
            </Link>
        </div>
    );
}

export function MarketplaceLayout({ children }) {
    return (
        <div className="layout-wrapper position-relative">
            <BlurBackground/>
            <Veil/>
            <MarketplaceHeader />
            {children}
            <CustomerServiceButton/>
        </div>
    );
}
