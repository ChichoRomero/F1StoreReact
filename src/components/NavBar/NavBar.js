import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/f1-logo-white.png"
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <h1>
                <img className="logo" src={logo} alt="f1-logo"/>
            </h1>
            <div>
                <button className="navBtn">Home</button>
                <button className="navBtn">Apparel</button>
                <button className="navBtn">Accessories</button>                
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar