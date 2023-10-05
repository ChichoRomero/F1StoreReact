import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, productUrl, name, price, stock}) => {
    return (
        <article className="CardItem">
            <picture>
                <img src={productUrl} className="ItemImg" alt="Product"/>
            </picture>
            <header className="Header">
                <h3 className="ItemHeader">
                    {name}
                </h3>
            </header>
            <section>
                <p className="Info">
                    Price: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">See More</Link>
            </footer>
        </article>
    )
}

export default Item