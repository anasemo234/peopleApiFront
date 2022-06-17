import  { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase';

const Header = (props) => {
    const photoStyles = {
        borderRadius: "50%",
        height: "2.5rem",
        margin: "0 1rem"
    };
    return (
        <nav className='nav'>
                    <Link to="/">
                        <div>People App</div>
                    </Link>
                    <ul>
                        {
                            props.user  
                            ?  (
                                             <>
                                                <li className='greeting-list-item'>Welcome, {props.user.displayName}
                                                <img
                                                style={photoStyles}
                                                 src={props.user.photoURL}
                                                 alt={props.user.displayName} />
                                                 </li>
                                                 <li onClick={logout} >Logout</li>
                                             </>
                                ) 
                            : <li onClick={login} >Login</li>
                        }
                    </ul>
            </nav>
    )
    
}

export default Header;