import { MarketplaceLayout } from './layouts/MarketplaceLayout';
import { MarketplaceBody } from './layouts/MarketplaceBody';
import { BrowserRouter } from "react-router-dom";
import './static/dist/global.css';

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
