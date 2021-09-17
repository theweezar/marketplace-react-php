import { MarketplaceLayout } from './layouts/MarketplaceLayout';
import { MarketplaceBody } from './layouts/MarketplaceBody';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <MarketplaceLayout>
                <MarketplaceBody/>
            </MarketplaceLayout>
        </BrowserRouter>
    );
}

export default App;
