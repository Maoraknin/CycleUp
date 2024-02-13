
import { useState } from "react"
import { saveProduct } from "../../store/product.action"
import { productService } from "../../services/product.service"

export function ProductAdd() {

    const garbageTypes = productService.getGarbageTypes()
    const [product, setProduct] = useState(productService.getEmptyProduct())

    function onAddProduct(ev) {
        ev.preventDefault()
        saveProduct(product)

    }

    function handleChange({ target }) {
        let { value, name: field } = target
        console.log(field);
        setProduct((prevState) => {
            return { ...prevState, [field]: value }
        })
    }




    return (
        <section className='product-add'>
            <form onSubmit={onAddProduct} className='add-product-form'>
                <div className='add-input-container'>
                    <input type='text'
                        name='name'
                        placeholder='Enter product name...'
                        value={product.name}
                        onChange={handleChange}
                    />
                </div>
                
                <div className='add-input-container'>
                    <input type='text'
                        name='company'
                        placeholder='Enter product company...'
                        value={product.company}
                        onChange={handleChange}
                    />
                </div>

                <select
                     onChange={handleChange}
                     value={product.garbageType}
                     name='garbageType'
                >
                    <option value="" disabled>Select an option</option>
                    {Object.keys(garbageTypes).map((garbageType) => (
                      <option
                        key={garbageType}
                        value={garbageType}
                        style={{ fontSize: '13px', width: '90%' }}
                      >
                        {garbageType + ' - ' + garbageTypes[garbageType]}
                      </option>
                    ))}
                </select>
                
                <div className='add-input-container'>
                    <input type='url'
                        name='image'
                        placeholder='Enter product image url...'
                        value={product.image}
                        onChange={handleChange}
                    />
                </div>
                <button className="add-btn">Submit</button>
            </form>
        </section>
    )

}