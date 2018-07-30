import React, { Component } from 'react';
import './CardList.css';

class CardList extends Component {
    render() {
        console.log(this);
        return (
            <ul className="Card__list">
                <div className="Card">
                    <img src={this.props.url} alt="" />
                    <p>{this.props.name}</p>
                    <ul>
                        <li>{this.props.types}</li>
                    </ul>
                </div>
            </ul>
        )
    }
}

export default CardList;