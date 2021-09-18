import { SearchResult } from '../search/SearchResult';
import { Filter } from '../filter/Filter';

export function MarketplaceBody() {
    return (
        <div className="main-content-wrapper row m-0">
            <SearchResult />
            <Filter />
        </div>
    );
}
