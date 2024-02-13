import { useEffect, useState } from "react"
import { loadProducts } from "../../store/product.action.js"
import { ProductPreview } from "./product-preview.jsx";


export function ProductList({products}) {

    // const [products, setProducts] = useState([])

    console.log(products)

    // useEffect(() => {
    //     // getProducts()
    // }, [])

    // console.log('products:', products)
    // async function getProducts() {
    //     try {
    //         const dbProducts = await loadProducts()
    //         // if (!products.length) setProducts(dbProducts)
    //     }
    //     catch (err) {
    //         console.dir('err:', err)
    //     }
    // }

    return (
        <section className='product-list'>
            {products.length && products.map(product => {
                return <ProductPreview product = {product} />
            })}
            {!products.length && <h3>No products to show</h3>}
            {!products && <h3>Loading...</h3>}
        </section>
    )

}