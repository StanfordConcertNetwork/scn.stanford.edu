import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';
import service from '../assets/img/team/jorja.jpg';

function Cards(props) {
  return (
    <div className='cards'>
      <h1> Check out our upcoming shows</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/logo_small.png'
              text='Explore the hidden Watterfall'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={service}
              text='Explore the hidden Watterfall'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/logo_small.png'
              text='Explore the hidden Watterfall'
              label='Fun'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
