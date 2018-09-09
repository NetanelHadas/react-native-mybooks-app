import React from 'react';
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from './components/LoginForm';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                {/* <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login"  />
                </Scene> */}
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => { Actions.bookCreate() }}
                        key="bookList"
                        component={BookList} 
                        title="Books"
                        initial
                    />
                    <Scene 
                        key="bookCreate"
                        component={BookCreate}
                        title="Create Book"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;