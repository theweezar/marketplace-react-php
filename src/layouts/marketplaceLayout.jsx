import { MarketplaceHeader } from "./MarketplaceHeader";
import { RightSideBar } from "./RightSideBar";
import '../scss/layout.scss';

export function MarketplaceLayout({ children }) {
    return (
        <div>
            <MarketplaceHeader/>
            <RightSideBar/>
            {children}
        </div>
    );
}
