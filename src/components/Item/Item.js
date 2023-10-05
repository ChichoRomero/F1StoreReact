import './Item.css'

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
                <button className="Option">See More</button>
            </footer>
        </article>
    )
}

export default Item