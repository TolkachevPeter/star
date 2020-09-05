import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row'

import './app.css';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

      const personDetails = (
        <ItemDetails itemId={11} /> 
      );

      const starshipDetails = (
        <ItemDetails itemId={3} />
      )

    return (
      <div className="stardb-app">
        <Header />

        <Row 
        left={personDetails}
        right={starshipDetails}
        />
       

      </div>


    );
  }
}
