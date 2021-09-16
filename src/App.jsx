import { MarketplaceLayout } from './layouts/MarketplaceLayout';
import { SearchResult } from './search/SearchResult';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <MarketplaceLayout>
                <SearchResult/>
            </MarketplaceLayout>
        </BrowserRouter>
    );
}

export default App;
