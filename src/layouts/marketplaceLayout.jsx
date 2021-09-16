import { Header } from "./Header";
import { RightSideBar } from "./RightSideBar";
import '../scss/layout.scss';

export function MarketplaceLayout({ children }) {
    return (
        <div>
            <Header/>
            <RightSideBar/>
            <div className="invisible-block"></div>
            {children}
            <p>
                Footer
            </p>
        </div>
    );
}
