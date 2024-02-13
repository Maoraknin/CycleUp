export function ProductPreview({ product }) {
    console.log('here')

    return (
        <section className='product-preview'>
            {/* <img className="preview-img" src={`<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=https://robohash.org/${product.mail}.png" />`} /> */}
            <img className="preview-img" src={`https://www.gravatar.com/avatar/${product.imgUrl}`} />
            <div className="product-container">
                <h3 className="preview-mail">{product.mail}</h3>
                <p>{product.txt}</p>
            </div>
        </section>
    )

}