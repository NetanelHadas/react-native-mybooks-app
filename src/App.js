import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from 'firebase';
import reducers from "./reducers";
import Router from "./Router";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

//const store = createStore(reducers);

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyABXI2gYHK767AgGVg2beOO-rr-NrfCGSA',
            authDomain: 'mybooks-52547.firebaseapp.com',
            databaseURL: 'https://mybooks-52547.firebaseio.com',
            projectId: 'mybooks-52547',
            storageBucket: 'mybooks-52547.appspot.com',
            messagingSenderId: '256906231886'
        };
        firebase.initializeApp(config);
    }

    render = () => {
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;