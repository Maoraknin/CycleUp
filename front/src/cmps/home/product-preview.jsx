export function ProductPreview({ product }) {

    return (
        <section className='product-preview'>
            <img className="product-img" src={product.image} />
            <div className="product-container">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-company">{product.company}</p>
                <p className="product-garbage-type">{product.garbageType}</p>
            </div>
        </section>
    )

}