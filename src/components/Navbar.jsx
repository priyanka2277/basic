import logo from '../assets/logo.png';
import './Navbar.css';
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="university logo"></img>
            </div>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/programs">Programs</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <link to="/download">Download</link>
                </li>
                <li>
                    <link to="/contact">Contact</link>
                </li>
            </ul>
        </div>

    )
};