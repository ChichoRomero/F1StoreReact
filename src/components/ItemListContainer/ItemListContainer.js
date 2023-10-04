import { useEffect, useState } from "react"
import { getProducts } from "../../assynMock"
import ItemList from "../ItemsList/ItemsList"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, []
    )
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer