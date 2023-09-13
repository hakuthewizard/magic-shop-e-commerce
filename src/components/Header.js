import CartButton from './CartButton';
import './Header.css';
import {  NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';

const Header = () => {
    return (
        <div>
            <div className="header">
            <NavLink style={{color: 'inherit', textDecoration: 'none' }} to="/welcomepage"><span className='header-magicverse'>MAGICVERSE</span></NavLink>
            <span  className='header-wizardry'>Wizardry & Spellworks</span>
            <CartButton/>

            </div>
           
            
        </div>
    )
}
export default Header;