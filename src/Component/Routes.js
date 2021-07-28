import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Employee from './Employee';
import MyForm from './MyForm';




const Routes = () => {
    return (
        <Router>
            <div>
                
                <Link to="/emp">Employee</Link> {'  '}
                <Link to="/form">MyForm</Link> {'  '}
                <Switch>
                    <Route path="/emp"><Employee /></Route>
                    <Route path="/form"><MyForm /></Route>
                </Switch>
            </div>
        </Router>
    );
};
export default Routes;

 