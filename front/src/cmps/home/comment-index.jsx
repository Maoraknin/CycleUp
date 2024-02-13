import { useEffect } from "react";
import { loadComments } from "../../store/comment.action.js";
import { CommentAdd } from "./comment-add.jsx";
import { CommentFilter } from "./comment-filter.jsx";
import { CommentList } from "./comment-list.jsx";
import { useSelector } from 'react-redux'

export function CommentIndex() {

    // const  filterBy = 8
        // const comments  = []
    const { filterBy, comments } = useSelector((storeState) => storeState.commentModule)

    useEffect(() => {
        onLoadComments(filterBy)
    }, [filterBy])


    async function onLoadComments(filterBy) {
        try {
            await loadComments(filterBy)
            // console.log('comments:', comments)
        } catch(err) {
            console.log('err:', err)
        }
    }

    return (
        <section className='comment-index'>
            <CommentAdd />
            <CommentFilter />
            {comments && <CommentList comments={comments} />}
        </section>
    )

}