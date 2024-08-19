import logo from '../img/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [theme, setTheme] = useState('Светлая')
    const switchTheme = () =>{
        setTheme((cur) => (cur === 'Светлая' ? 'Темная' : 'Светлая'));
    };

    return (
        <div className='bg-nav'>
            <div className="container">
                <div className='nav'>
                    <Link to='/' className='nav-link'>
                        <div className='logo-block'>
                            <img className="nav_logo" src={logo} alt="#" />
                            <p className='logo-name'>ATTAJVIDU</p>
                        </div>
                    </Link>

                    <div className="nav-toggle">
                        <p className="change-text">{theme} тема</p>
                        <input onChange={switchTheme} type="checkbox" id='toggle-btn'/>
                        <label className='label-btn' htmlFor="toggle-btn"></label>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Nav;