import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Logo - Home</li>
                </Link>
                <Link to={"/categorias/pokemon"}>Pokemon</Link>
                <Link to={"/categorias/neopets"}>Neopets</Link>
                <Link to={"/categorias/sanrio"}>Sanrio</Link>

                <CartWidget />
            </ul>
        </nav>
    );
}

export default NavBar;