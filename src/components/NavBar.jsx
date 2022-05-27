import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>Logo</li>
                <li>Menu</li>
                <li>Info</li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

export default NavBar;