import React from 'react';
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from './components/LoginForm';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BookEdit from './components/BookEdit';

const RouterComponent = () => {
    return (
        <Router
        titleStyle={{ fontFamily: 'Pacifico-Regular' }}
        >
            <Scene key="root" hideNavBar>
                {/* <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login"  />
                </Scene> */}
                <Scene key="main">
                    <Scene
                        navigationBarStyle={{ backgroundColor: '#FF8C00' }}
                        titleStyle={{ textAlign: 'center', flex: 1, marginLeft: 70, color: '#FFD700' }}
                        rightButtonStyle={{ right: 0 }}
                        rightTitle="Add"
                        onRight={() => { Actions.bookCreate() }}
                        key="bookList"
                        component={BookList} 
                        title="MyBooks"
                        initial
                    />
                    <Scene 
                        titleStyle={{ textAlign: 'center', flex: 1, marginRight: 70 }}
                        key="bookCreate"
                        component={BookCreate}
                        title="Create Book"
                    />
                    <Scene
                        titleStyle={{ textAlign: 'center', flex: 1, marginRight: 70 }}
                        key="bookEdit"
                        component={BookEdit}
                        title="Edit Book"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;