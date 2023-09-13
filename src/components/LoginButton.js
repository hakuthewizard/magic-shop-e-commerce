import { NavLink } from "react-router-dom";
import './LoginButton.css';

const LoginButton = () =>  {
    return (
        <NavLink style={{ textDecoration: 'none'}} to="/loginpage" ><a className='login-button-header'>Login</a>

        </NavLink>
    )
}
export default LoginButton;