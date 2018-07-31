import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {name, types, url} = this.props
        return (
                <li className="Card">
                    <img className="Card__image" src={url} alt={name} />
                    <h2 className="Card__name">{name}</h2>
                    <ul className="Card__types-list">
                        {types.map(function(type) {
                            return (
                                <li className="Card__types-element" key={type}>{type}</li>
                            )
                        })}
                    </ul>
                </li>
        )
    }
}

export default Card;