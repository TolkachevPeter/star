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


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
  };


  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
        <div className="stardb-app">
        <Header />
        <RandomPlanet/>
        <PeoplePage/>
        <StarshipPage/>
        <PlanetPage/>
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
