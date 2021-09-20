import { MarketplaceLayout } from './layouts/MarketplaceLayout';
import { MarketplaceBody } from './layouts/MarketplaceBody';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './scripts/redux/reducers/mainReducer';
import './static/dist/global.css';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <MarketplaceLayout>
                    <MarketplaceBody/>
                </MarketplaceLayout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
