import React from 'react'
import CardItem from './CardItem'
import IMG from './images/img-9.jpg'
import IMG1 from './images/img-2.jpg'

import './Cards.css'

function Cards() {
    return (
        <div className="cards">
          <h1>Check out these EPIC Destination!</h1>  
          <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={IMG}
                    text="Explore the hidden waterfall deep
                    inside the Amazon"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem 
                    src={IMG1}
                    text="Travel to the finest Destination"
                    label="luxury"
                    path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src={IMG}
                    text="Explore the hidden waterfall deep
                    inside the Amazon"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem 
                    src={IMG1}
                    text="Travel to the finest Destination"
                    label="luxury"
                    path="/services"
                    />
                    <CardItem 
                    src={IMG}
                    text="Explore the hidden waterfall deep
                    inside the Amazon"
                    label="Adventure"
                    path="/services"
                    />
                </ul>
            </div>
          </div>
        </div>
    )
}

export default Cards
