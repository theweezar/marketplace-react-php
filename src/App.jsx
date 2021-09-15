import MarketplaceLayout from './layouts/marketplaceLayout';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <MarketplaceLayout>
                <p>Body</p>
            </MarketplaceLayout>
        </BrowserRouter>
    );
}

export default App;
