import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Employee from './Employee';
import MyForm from './MyForm';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Header from './Header';
import Footer from './Footer';
import MaterialUiSample from './MaterialUiSample';
import Welcome from './Welcome';
import Login from './Login';
import DataMapper from '../redux/DataMapper';


const Routes = () => {
    return (
        <div>
        <Router>
            <div>
            <Header></Header>
                {/* <Link to="/home">Home</Link> {'  '}
                <Link to="/emp">Employee</Link> {'  '}
                <Link to="/form">MyForm</Link> {'  '} */}

      <div className="container">
                <Switch>
                    {/* add an exact path to base url  */}
                    <Route exact path="/"> <Home/> </Route>
                    <Route path="/welcome"> <Welcome /> </Route>
                    <Route path="/emp"> <Employee /> </Route>
                    <Route path="/form"><MyForm /></Route>
                    <Route path="/home"><Home /></Route>
                    <Route path="/mat"><MaterialUiSample /></Route>
                    <Route path="/datamapper"> <DataMapper /> </Route>
                    {/* undefined url */}
                    <Route path="/login"><Login /></Route>

                    <Route path="/*"><PageNotFound /></Route>
                </Switch>
                
            </div>
            </div>
        </Router>
        <Footer/>
        </div>
    );
};
export default Routes;
 



