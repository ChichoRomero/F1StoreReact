import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/f1-logo-white.png"
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <img className="logo" src={logo} alt="f1-logo"/>
            </Link>
            <div className="Categories">
                <NavLink to="/" className="Option">Home</NavLink>
                <NavLink to={`/category/apparel`} className="Option">Apparel</NavLink>
                <NavLink to={`/category/accessories`} className="Option">Accessories</NavLink> 
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar