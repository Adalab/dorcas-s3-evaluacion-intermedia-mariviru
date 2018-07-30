import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';

class App extends Component {

  render() {
    console.log(this);
    return (
      <main className="Main">
        <h1>Mi lista de pokemon</h1>
        {this.props.pokemons.map(function (pokemon) {

          return (

            <CardList
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              url={pokemon.url}
            />

          )
        })}
      </main>
    )
  };
}

export default App;
