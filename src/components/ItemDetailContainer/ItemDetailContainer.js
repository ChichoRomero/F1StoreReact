import "./ItemDetailContainer.css"
import {getProductsById} from "../../asynMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer