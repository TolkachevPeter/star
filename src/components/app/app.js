import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import Row from "../row/row";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import {
  SwapiServiceProvider, 
} from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
  };


  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <Router>
        <div className="stardb-app">
        <Header />
        <RandomPlanet/>

          <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact />
          <Route path='/people' render={() => <h2>People</h2>} exact />
          <Route path='/people' component={PeoplePage} />
          <Route path='/planets' component={PlanetPage} />
          <Route path='/starships' component={StarshipPage} />
        </div>
        </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
