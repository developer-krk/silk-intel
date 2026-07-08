import logo from "../assets/logo.jpeg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function LogoSection() {
    return (
        <Link to="/">
            <div className="logo"><img src={logo} alt="SilkIntel Logo" />
                <h2>SilkIntel</h2>
            </div >
        </Link>
    );
}
function NavigationLinks() {
    return (
        <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/suppliers">Suppliers</Link>
            </li>
            <li>
                <Link to="/compare">Compare</Link>
            </li>
            <li>
                <Link to="/analytics">Analytics</Link>
            </li>
        </ul>
    );
}
function LoginSection() {
    return (
        <Link to="/login">
            <button className="login-btn">
                Login
            </button>
        </Link>
    );
}
function Navbar() {
    return (
        <nav>
            <LogoSection />
            <NavigationLinks />
            <LoginSection />
        </nav>
    );
}

export default Navbar;