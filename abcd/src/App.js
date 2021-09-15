/* eslint-disable */
import React from 'react';
import Home from './components/Home.js';
import Coding from './components/Coding.js';
import { Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/coding" component={Coding}/>
            </div>
        );
    }
}

export default App;
