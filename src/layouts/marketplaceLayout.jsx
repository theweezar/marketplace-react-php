import { MarketplaceHeader } from "./MarketplaceHeader";
import { RightSideBar } from "./RightSideBar";

function BlurBackground() {
    return (
        <div className="blur-bg d-none"></div>
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
            <RightSideBar/>
            <Veil/>
            <MarketplaceHeader/>
            {children}
        </div>
    );
}
