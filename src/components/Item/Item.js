const Item = ({id, productUrl, name, price, stock}) => {
    return (
        <article className="Carditem">
            <header className="Header">
                <h3 className="ItemHeader">
                    {name}
                </h3>
            </header>
            <picture>
                <img src={productUrl} className="ItemImg" alt="Product"/>
            </picture>
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