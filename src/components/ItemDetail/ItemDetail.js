import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, productUrl, name, price, stock}) => {
    
    return (
        <article className="CardItem">
            <picture>
                <img src={productUrl} className="ItemImg" alt={name}/>
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
                    Available stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail