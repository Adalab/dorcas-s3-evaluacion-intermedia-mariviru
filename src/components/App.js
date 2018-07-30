import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';

class App extends Component {

  render() {
    const { pokemons } = this.props
    return (
      <main className="Main">
        <h1>Mi lista de pokemon</h1>
        <CardList pokemon={pokemons} />
      </main>
    )
  };
}

export default App;
