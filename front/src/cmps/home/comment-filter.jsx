import { useEffect, useRef, useState } from "react"
import { commentService } from "../../services/comment.service"
import { utilService } from "../../services/util.service"
import { setFilter } from "../../store/comment.action"

export function CommentFilter() {

    const [filterBy, setFilterBy] = useState(commentService.getDefaultFilter())
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

    return <form className="comment-filter">
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