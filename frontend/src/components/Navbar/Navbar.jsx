import { Link, NavLink, useNavigate } from "react-router";
import SearchI from "../../assets/Search.svg";
import LogInModal from "../LogInModal/LogInModal";
import "./Navbar.css";
import { useState } from 'react';
import avatar from '../../assets/images/avatar.svg';
import { logout } from "../../services/authService";

const Navbar = (props) => {

    const [modalState, setModalState] = useState(false);
    const navigate = useNavigate();

    function handleLogout() {
        logout()
            .then(() => {
                props.setAuthStatus(false);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
                props.setError(error.message)
            });
    }

    return (<>
        <header>
            <nav>
                <div className="navbar-inner">
                    <div className="left">
                        <div className="logo">
                            <Link to='/' className="logoLink" href="">Cubegram</Link>
                        </div>
                        <ul className="nav-links">
                            <li><NavLink to='/' className="nav-link" href="">Main</NavLink></li>
                            <li><NavLink to='/records' className="nav-link" href="">Records</NavLink></li>
                            <li><NavLink to='/rooms' className="nav-link" href="">Rooms</NavLink></li>
                        </ul>
                    </div>

                    <div className="right">
                        <NavLink to="/search"><img className="searchI" src={SearchI} /></NavLink>

                        {!props.authStatus ? (<button onClick={() => setModalState(true)} className="login-btn">Log in</button>) : (
                            <div className="right-inner">
                                <button onClick={handleLogout} className="logout-btn">Log out</button>
                                <div className="profile-btn">
                                    <NavLink className='profile-btn-link' to='/myprofile'><img src={avatar} alt="avatar" />My Profile</NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
        <LogInModal authStatus={props.authStatus} setAuthStatus={props.setAuthStatus} call={modalState} onDestroy={() => setModalState(false)} />
    </>
    )
}

export default Navbar