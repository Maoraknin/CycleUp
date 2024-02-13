import { useState } from "react"
import { saveProduct } from "../../store/product.action"
import { productService } from "../../services/product.service"

export function ProductAdd() {

    const [product, setProduct] = useState(productService.getEmptyProduct())

    function onAddProduct(ev) {
        ev.preventDefault()
        saveProduct(product)

    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setProduct((prevState) => {
            return { ...prevState, [field]: value }
        })
    }




    return (
        <section className='product-add'>
            <form onSubmit={onAddProduct} className='add-product-form'>
                <div className='add-input-container'>
                    <input type='email'
                        name='mail'
                        id='mail'
                        placeholder='Enter email...'
                        value={product.mail}
                        onChange={handleChange}
                    />
                </div>
                <div className='add-input-container'>
                    <textarea
                        name='txt'
                        id='product'
                        rows='4'
                        cols='35'
                        placeholder='Enter product...'
                        value={product.txt}
                        onChange={handleChange}
                    />
                </div>
                <button className="add-btn">Submit</button>
            </form>
        </section>
    )

}