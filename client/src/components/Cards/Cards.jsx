import React from "react";
import Card from '../Card/card';
import './cards.css';

function Cards({ countries }) {
    return (
        <div className="cards_cont">
            {countries.map((country, index) => (
                <Card
                    key={country.ID}
                    info={country}
                />
            ))}
        </div>
    );
}

export default Cards;
