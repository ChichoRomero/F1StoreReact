import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>F1 Store</h1>
            <div>
                <button>Home</button>
                <button>Apparel</button>
                <button>Accessories</button>                
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar