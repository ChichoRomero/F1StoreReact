import cart from './assets/shopping-cart.png'

const CartWidget = () => {
    return (
        <button className='cart'>
            <img src={cart} alt='cart-icon' height={50} width={50}/>
            0
        </button>
    )
}

export default CartWidget