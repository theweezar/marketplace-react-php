import Header from "./header";
import '../scss/layout.scss';

function MarketplaceLayout({ children }) {
    return (
        <div>
            <Header/>
            {children}
            <p>
                Footer
            </p>
        </div>
    );
}

export default MarketplaceLayout;
