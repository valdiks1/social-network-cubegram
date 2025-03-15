import SearchI from "../../assets/Search.svg";
import "./Navbar.css";

const Navbar = () => {

    return(
        <header>
            <nav>
                <div className="navbar-inner">
                    <div className="logo">
                        <a className="logoLink" href="">Cubegram</a>
                    </div>
                    <ul className="nav-links">
                        <li><a className="nav-link" href="">Main</a></li>
                        <li><a className="nav-link" href="">Records</a></li>
                        <li><a className="nav-link" href="">Rooms</a></li>
                    </ul>
                    <div className="right">
                        <a href=""><img className="searchI" src={SearchI}/></a>
                        <button className="login-btn">Log in</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar