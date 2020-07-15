import React, {useState} from 'react'
import { Link } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faBars } from '@fortawesome/free-solid-svg-icons'

//Images
import logo from '../images/logo.svg'

function Nav() {
    //Change the state of the Navigation Menu For Mobile
    const [menuActive, setMenuState] = useState(false);

    return (
        <header>
            <nav className="main-nav">
                <div className="main-nav__logo">
                    <Link exact to='/'>
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                

                <div id="open-icon" className="main-nav__nav-icon-open">
                    <FontAwesomeIcon className="fav-icons" icon={faBars} onClick={() => setMenuState(true)} />
                </div>

                <div className={ 
                    //If menuActive is true, show the mobile nav menu -- else show the nav links and hide the mobile menu
                    menuActive ? 'main-menu-links active': 'main-menu-links'
                }>

                    <div id="close-icon" className="main-menu-links-icons__ close">
                        <FontAwesomeIcon className="fav-icons" icon={faWindowClose} onClick={() => setMenuState(false)}/>
                    </div>

                    <div className="main-nav__menu-buttons">
                        <div id="space">
                        <Link exact to='signup'>
                            <button id="sign-up" className="main-nav__menu-button" onClick={() => setMenuState(false)}>Sign Up</button>
                        </Link>
                        </div>
                        <div>
                        <Link exact to='signin'>
                            <button id="sign-in" className="main-nav__menu-button" onClick={() => setMenuState(false)}>Sign In</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav
