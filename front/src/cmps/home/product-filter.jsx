import { useEffect, useRef, useState } from "react"
import { productService } from "../../services/product.service"
import { utilService } from "../../services/util.service"
import { setFilter } from "../../store/product.action"

export function ProductFilter() {

    const [filterBy, setFilterBy] = useState(productService.getDefaultFilter())
    const onSetFilter = useRef(utilService.debounce(setFilter))
    const elInputRef = useRef(null)

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
                id="content"
                name="content"
                placeholder="Filter"
                value={filterBy.content}
                onChange={handleChange}
                ref={elInputRef}
            />
    </form>

}