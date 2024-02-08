import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BrowserRouter>
//     <Provider store={store}>
//         <App/>
//     </Provider>
// </BrowserRouter>);