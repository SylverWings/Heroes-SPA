import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext)

    const onLogOut = () => {

        logout();

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-2">
                <Link 
                    className="navbar-brand" 
                    to="/"
                    ><strong>
                    <img id='icono' src="../../../public/Icons/icon.jpg" alt="Icon" />
                </strong>
                </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="marvel"
                    ><strong>
                        Marvel
                    </strong>
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="dc"
                    ><strong>
                        DC
                    </strong>
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="search"
                    ><strong>
                        Search
                    </strong>
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className='nav-item nav-link'>
                        Hi! { user?.name }
                   </span>
                   <button 
                    className='nav-item nav-link btn'
                    onClick={ onLogOut }
                    >
                        Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}