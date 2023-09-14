import cart from './assets/shopping-cart.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart-icon' height={50} width={50}/>
            0
        </div>
    )
}

export default CartWidget