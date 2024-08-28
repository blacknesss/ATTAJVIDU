import { useState } from 'react';
import { Link } from 'react-router-dom';
import techlogo from '../img/techlogo.png';

function Nav() {

    const [isTheme, setIsTheme] = useState(false);
    const switchTheme = () =>{
        if (!isTheme){
            return document.body.style.backgroundColor = `#0E0E0E`
        }else{
            return document.body.style.backgroundColor = `#8C8C88`
        }
    };

    return (
        <div className='bg-nav'>
            <div className="container">
                <div className='nav'>
                    <Link to='/' className='nav-link'>
                        <div className='logo-block'>
                            <img className="nav_logo" src={techlogo} alt="#" />
                            <p className='logo-name'>ATTAJVIDU</p>
                        </div>
                    </Link>

                    <div className="nav-toggle">
                        <p className="change-text">Темная тема</p>
                        <input checked = {isTheme} onClick={switchTheme} onChange={(e) => setIsTheme(e.target.checked)} type="checkbox" id='toggle-btn'/>
                        <label className='label-btn' htmlFor="toggle-btn"></label>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Nav;