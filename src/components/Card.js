import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {name, types, url} = this.props
        console.log('card', this);
        return (
                <li className="Card">
                    <img src={url} alt="" />
                    <p>{name}</p>
                    <ul>
                        {types.map(function(type) {
                            return (
                                <li>{type}</li>
                            )
                        })}
                    </ul>
                </li>
        )
    }
}

export default Card;