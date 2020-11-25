import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import SwapiService from "../../services/swapi-service";
import { 
        PeoplePage, 
        PlanetPage, 
        StarshipsPage,
        SecretPage,
        LoginPage } from '../pages';

import {
  SwapiServiceProvider, 
} from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  };


  render() {
    
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <Router>
        <div className="stardb-app">
        <Header />
        <RandomPlanet/>

          <Switch>
          <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact />
          <Route path='/people/:id?' component={PeoplePage} />
          <Route path='/planets' component={PlanetPage} />
          <Route path='/starships' component={StarshipsPage} exact />
          <Route path='/starships/:id'
                 render={({ match }) => {
                  const { id } = match.params;
                 return <StarshipDetails itemId={ id } />
                }}/>
          <Route 
          path='/secret'
          render={()=>(
            <SecretPage isLoggedIn={isLoggedIn} />
          )} />
          <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}/>
                  )}/>
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>

        </div>
        </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
