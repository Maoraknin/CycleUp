import { useEffect, useState } from "react"
import { loadComments } from "../../store/comment.action"
import { CommentPreview } from "./comment-preview.jsx";


export function CommentList({comments}) {

    // const [comments, setComments] = useState([])

    console.log(comments)

    // useEffect(() => {
    //     // getComments()
    // }, [])

    // console.log('comments:', comments)
    // async function getComments() {
    //     try {
    //         const dbComments = await loadComments()
    //         // if (!comments.length) setComments(dbComments)
    //     }
    //     catch (err) {
    //         console.dir('err:', err)
    //     }
    // }

    return (
        <section className='comment-list'>
            {comments.length && comments.map(comment => {
                return <CommentPreview comment = {comment} />
            })}
            {!comments.length && <h3>No comments to show</h3>}
            {!comments && <h3>Loading...</h3>}
        </section>
    )

}