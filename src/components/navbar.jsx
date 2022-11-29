import React, {useState} from 'react';
import "../navbar.css"

function Navbar() {
    const [active, setActive] = useState("navmenu");
    const [toggleIcon, setToggleIcon] = useState('navtoggler');

    const navToggle = () => {
        active === 'navmenu' 
        ? setActive('navmenu navactive')
        : setActive('navmenu');

        //  ToggleIcon

        toggleIcon === 'navtoggler'
        ? setToggleIcon('navtoggler toggle')
        : setToggleIcon('navtoggler')
    }
    return (
        <nav className="nav">
            <a href="#" className="navbrand">CV</a>
            <ul className={active}>
                <li className="navitem"><a href="" className="navlink">Home</a></li>
                <li className="navitem"><a href="" className="navlink">About</a></li>
                <li className="navitem"><a href="" className="navlink">Skills</a></li>
                <li className="navitem"><a href="" className="navlink">Portfolio</a></li>
                <li className="navitem"><a href="" className="navlink">Contact</a></li>
            </ul>

            <div onClick ={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;