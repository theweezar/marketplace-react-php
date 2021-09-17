import { SearchResult } from '../search/SearchResult';
import { Filter } from '../filter/Filter';
export function MarketplaceBody() {
    return (
        <div>
            <Filter />
            <SearchResult />
        </div>
    );
}
