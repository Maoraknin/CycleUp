import { useEffect, useRef, useState } from "react"
import { productService } from "../../services/product.service"
import { utilService } from "../../services/util.service"
import { setFilter } from "../../store/product.action"

export function ProductFilter() {

    const [filterBy, setFilterBy] = useState(productService.getDefaultFilter())
    const onSetFilter = useRef(utilService.debounce(setFilter))
    const elInputRef = useRef(null)

    const garbageTypes = productService.getGarbageTypes()

    useEffect(() => {
        elInputRef.current.focus()
    }, [])

    useEffect(() => {
        // update father cmp of filter change
        onSetFilter.current(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        let { value, name: field } = target
        setFilterBy((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return <form className="product-filter">
            <input type="text"
                name="name"
                placeholder="Filter"
                value={filterBy.name}
                onChange={handleChange}
                ref={elInputRef}
            />

            <select
                 onChange={handleChange}
                 value={filterBy.garbageType}
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
    </form>

}