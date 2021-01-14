import React from 'react';
import { Button } from './Button';
import promo from '../assets/videos/odesza.mp4';
import './HeroSection.css';
import '../App.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={promo} autoPlay loop muted />
      <h1> ADVENTURE AWAITS</h1>
      <p> What are you waiting for? </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          Get Started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}>
          Sign Up <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
