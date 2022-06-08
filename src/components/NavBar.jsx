import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Logo - Home</li>
                </Link>

                <li>Menu</li>
                <li>Info</li>
                <CartWidget />
            </ul>
        </nav>
    );
}

export default NavBar;