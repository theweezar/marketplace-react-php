import { MarketplaceLayout } from './layouts/MarketplaceLayout';
import { MarketplaceBody } from './layouts/MarketplaceBody';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import TransactionLayout from './layouts/TransactionLayout';
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
                <Route exact path="/">
                    <MarketplaceLayout>
                        <MarketplaceBody/>
                    </MarketplaceLayout>
                </Route>
                <Route exact path="/transactions">
                    <TransactionLayout/>
                </Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
