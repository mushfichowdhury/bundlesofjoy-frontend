import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/rootReducer'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);