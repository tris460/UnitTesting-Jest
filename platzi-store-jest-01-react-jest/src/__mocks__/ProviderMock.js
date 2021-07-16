import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { initialState } from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}> {/* //Simula la navegacion de las rutas */}
            {props.children} {/*Los componentes que necesitamos en esta estructura */}
        </Router>
    </Provider>
);

export default ProviderMock;