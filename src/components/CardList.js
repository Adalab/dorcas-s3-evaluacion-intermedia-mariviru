import React, { Component } from 'react';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
  render() {
    const { pokemon } = this.props
    return (
      <ul className="Card__list">
        {pokemon.map(function (pokemon) {
          return (
            <Card
              name={pokemon.name}
              types={pokemon.types}
              url={pokemon.url}
            />

          )
        })}
      </ul>
    )
  }
}

export default CardList;