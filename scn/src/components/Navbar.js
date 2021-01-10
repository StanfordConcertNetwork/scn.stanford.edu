import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () =>  setClick(!click);

  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if(windoww.innerWWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener

    return (
      <>
        <nav className="Navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              SCN <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Team' className='nav-links' onClick={closeMobileMenu}>
                  Team
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Frost' className='nav-links' onClick={closeMobileMenu}>
                  Frost
                </Link>
                {button && <Button buttonStyle='btn--outline'> FROST </Button>}
              </li>
              
            </ul>
            </div>
        </nav>
      </>
    )
}

export default Navbar
