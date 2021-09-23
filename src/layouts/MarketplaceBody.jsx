import { SearchResult } from '../search/SearchResult';
import { Filter } from '../filter/Filter';

export function MarketplaceBody() {
    return (
        <div className="main-content-wrapper row m-0">
            <div className="search-result-container">
                <div className="spinner-wrapper z-1050 d-none">
                    <div className="spinner"></div>
                </div>
                <SearchResult />
            </div>
            <div className="filter-container">
                <Filter />
            </div>
        </div>
    );
}
