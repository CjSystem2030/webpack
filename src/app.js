import React  from 'react';

import {Browser as Router, Route, Switch} from 'react-router-dom'
import Productos from './components/Productos';

import './app.css';

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path='/productos' component={Productos} />
            </Switch>
        </Router>
    )
}

export default App