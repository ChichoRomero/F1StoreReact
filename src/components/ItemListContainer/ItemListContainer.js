import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asynMock"
import ItemList from "../ItemsList/ItemsList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    
    useEffect(() => {
        const assynFunc = categoryId ? getProductsByCategory : getProducts

        assynFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId]
    )
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer