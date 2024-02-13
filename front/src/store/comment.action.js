import { commentService } from '../services/comment.service.js'
import { store } from './store.js'
import { SET_COMMENTS, ADD_COMMENT, SET_IS_LOADING, SET_FILTER } from './comment.reducer.js'

export async function loadComments(filterBy = '') {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    try {
        const comments = await commentService.query(filterBy)
        store.dispatch({ type: SET_COMMENTS, comments: comments })
        return comments
    } catch (err) {
        console.log('Had issues loading comments', err)
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function saveComment(comment) {
    try {
        const savedComment = await commentService.save(comment)
        store.dispatch({ type: ADD_COMMENT, comment: savedComment })
        return savedComment
    } catch (err) {
        console.error('Cannot save comment:', err)
        throw err
    }
}

export function setFilter(filterBy) {
    store.dispatch({ type: SET_FILTER, filterBy })
}
