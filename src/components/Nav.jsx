import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import techlogo from '../img/techlogo.png';

function Nav() {

    const [isTheme, setIsTheme] = useState( JSON.parse(localStorage.getItem('theme')) ?? true);
    
    useEffect(()=>{
        document.body.style.backgroundColor = isTheme ? `#0E0E0E` : `#8C8C88`;
    }, [isTheme]);

    

    const changeTheme = (e) => {
        const newTheme = e.target.checked;
        setIsTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
    }

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
                        <input
                        checked = {isTheme}
                        onChange={(e) => changeTheme(e)}
                        type="checkbox"
                        id='toggle-btn'/>
                        <label className='label-btn' htmlFor="toggle-btn"></label>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Nav;