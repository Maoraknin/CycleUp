import { useEffect } from "react";
import { loadProducts } from "../../store/product.action.js";
import { ProductAdd } from "./product-add.jsx";
import { ProductFilter } from "./product-filter.jsx";
import { ProductList } from "./product-list.jsx";
import { useSelector } from 'react-redux'

export function ProductIndex() {

    const { filterBy, products } = useSelector((storeState) => storeState.productModule)

    useEffect(() => {
        onLoadProducts(filterBy)
    }, [filterBy])


    async function onLoadProducts(filterBy) {
        try {
            await loadProducts(filterBy)
        } catch(err) {
            console.log('err:', err)
        }
    }

    return (
        <section className='product-index'>
            <ProductAdd />
            <ProductFilter />
            {products && <ProductList products={products} />}
        </section>
    )

}