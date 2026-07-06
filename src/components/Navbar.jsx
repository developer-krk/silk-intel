import logo from "../assets/logo.jpeg";
import "./Navbar.css";
function LogoSection() {
    return (
        <div className="logo"><img src={logo} alt="SilkIntel Logo" />
            <h2>SilkIntel</h2></div >
    );
}
function NavigationLinks() {
    return (
        
            <ul className="nav-links">
                <li>Products</li>
                <li>Suppliers</li>
                <li>Compare </li>
                <li>Analytics</li>
            </ul>
        
    );
}
function LoginSection() {
    return (
        <button className="login-btn">
            Login
        </button>
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