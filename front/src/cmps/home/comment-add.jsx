import { useState } from "react"
import { saveComment } from "../../store/comment.action"
import { commentService } from "../../services/comment.service"

export function CommentAdd() {

    const [comment, setComment] = useState(commentService.getEmptyComment())

    function onAddComment(ev) {
        ev.preventDefault()
        saveComment(comment)

    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setComment((prevState) => {
            return { ...prevState, [field]: value }
        })
    }




    return (
        <section className='comment-add'>
            <form onSubmit={onAddComment} className='add-comment-form'>
                <div className='add-input-container'>
                    <input type='email'
                        name='mail'
                        id='mail'
                        placeholder='Enter email...'
                        value={comment.mail}
                        onChange={handleChange}
                    />
                </div>
                <div className='add-input-container'>
                    <textarea
                        name='txt'
                        id='comment'
                        rows='4'
                        cols='35'
                        placeholder='Enter comment...'
                        value={comment.txt}
                        onChange={handleChange}
                    />
                </div>
                <button className="add-btn">Submit</button>
            </form>
        </section>
    )

}