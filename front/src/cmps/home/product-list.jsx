import { ProductPreview } from "./product-preview.jsx";


export function ProductList({products}) {


    return (
        <section className='product-list'>
            {products.length && products.map((product, idx) => {
                return <ProductPreview key={'product__' + idx} product = {product} />
            })}
            {!products.length && <h3>No products to show</h3>}
            {!products && <h3>Loading...</h3>}
        </section>
    )

}