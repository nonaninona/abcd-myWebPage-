/* eslint-disable */
import React from 'react';
import Home from './components/Home.js';
import Coding from './components/Coding.js';
import Office from './components/Office.js';
import Finance from './components/Finance.js';
import Plan from './components/Plan.js';
import { Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/coding" component={Coding}/>
                <Route path="/office" component={Office}/>
                <Route path="/finance" component={Finance}/>
                <Route path="/plan" component={Plan}/>
            </div>
        );
    }
}

export default App;
