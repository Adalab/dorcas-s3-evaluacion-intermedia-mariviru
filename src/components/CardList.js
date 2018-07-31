import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
              key={pokemon.id}
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

CardList.propTypes = {
  name: PropTypes.string,
  types: PropTypes.array,
  url : PropTypes.string
};

export default CardList;