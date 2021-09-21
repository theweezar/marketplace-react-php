import { useSelector } from "react-redux";
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

export function MarketplaceLayout({ children }) {
    return (
        <div className="layout-wrapper position-relative">
            <BlurBackground/>
            <Veil/>
            <MarketplaceHeader />
            {children}
        </div>
    );
}
